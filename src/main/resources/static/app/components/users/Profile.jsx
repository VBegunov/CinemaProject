import React, {useLayoutEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UserService from "./UserService";
import {useHistory} from "react-router-dom";

export default function Profile() {
    const classes = useStyles();
    const history = useHistory();
    const [id, setId] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [active, setActive] = React.useState('');
    const [roles, setRoles] = React.useState([]);

    function getUser() {
        UserService.showThisUser().then(user => {
            setId(user.data.id);
            setUsername(user.data.username);
            setPassword(user.data.password);
            setActive(user.data.active);
            setRoles(user.data.roles);
        })
    }

    useLayoutEffect(() => {
        getUser()
    }, []);


    function onSubmit() {
        let user = {
            id: id,
            username: username,
            password: password,
            active: active,
            roles: roles,
        };
        UserService.updateUser(user)
            .then();
        history.push("/");
    }

    return (
        <Grid container spacing={0} direction="column" alignItems="center"
              justify="center" style={{minHeight: '80vh'}}>

            <Typography component="h1" variant="h5">Профиль</Typography>

            <form className={classes.root} onSubmit={onSubmit}>
                <TextField id="standard-basic" label={"Login"}
                           value={username} onChange={e => setUsername(e.target.value)}/>
                <br/>
                <TextField id="standard-basic" label={"Password"}
                           value={password} onChange={e => setPassword(e.target.value)}/>
                <br/>
                <Button type="submit" fullWidth
                        variant="contained" color="primary"
                        className={classes.submit}
                >
                    <Typography component="h5">
                        Изменить
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

