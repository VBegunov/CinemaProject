import React, {useLayoutEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import CinemaService from "./CinemaService";

export default function Profile() {
    const classes = useStyles();
    const history = useHistory();
    const [id, setId] = React.useState(-1);
    const [name, setName] = React.useState('');
    const [user, setUser] = React.useState('');

    function getCinema() {
        CinemaService.showCinema(history.location.pathname.split(['/']).pop()).then(cinema => {
            if(history.location.pathname.split(['/']).pop()>0){
                setId(cinema.data.cinema_id);
                setName(cinema.data.name);
                setUser(cinema.data.user);
            }
        })
    }

    useLayoutEffect(() => {
        getCinema()
    }, []);


    function onSubmit() {
        let cinema = {
            cinema_id: id,
            name: name
        };
        if(id < 0){
            CinemaService.createCinema(cinema).then();
            history.push("/cinemas");
        } else {
            CinemaService.updateCinema(cinema)
                .then();
            history.push("/cinemas");
        }
    }

    function checkCinema() {
        if(id < 0){
            return "Создать";
        } else {
            return "Изменить";
        }
    }


    function checkAddOrUpdate() {
        if(id < 0){
            return <Typography component="h1" variant="h5">Создание кинотеатра</Typography>;
        } else {
            return <Typography component="h1" variant="h5">Изменение кинотеатра</Typography>;
        }
    }

    return (
        <Grid container spacing={0} direction="column" alignItems="center"
              justify="center" style={{minHeight: '80vh'}}>
            {checkAddOrUpdate()}
            <form className={classes.root} onSubmit={onSubmit}>
                <TextField id="standard-basic" label={"id"}
                           value={id} disabled/>
                <br/>
                <TextField id="standard-basic" label={"Изменения вносил"}
                           value={user} disabled/>
                <br/>
                <TextField id="standard-basic" label={"Название кинотеатра"}
                           value={name} onChange={e => setName(e.target.value)}/>
                <br/>
                <Button type="submit" fullWidth
                        variant="contained" color="primary"
                        className={classes.submit}
                >
                    <Typography component="h5">
                        {checkCinema()}
                    </Typography>
                </Button>
            </form>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    submit: {
        margin: theme.spacing(1),
    }
}));

