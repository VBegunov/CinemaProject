import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));


export default function MainPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <br/>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} src={'/src/app/components/images/The_Avengers_2012_logo.jpg'} alt={"Avangers"}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Фильм №1
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Краткое описание фильма
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Возростное ограничение
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button><Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Смотреть
                                </Typography></Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">Рейтинг 9.5/10</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <br/>
        </div>
    );
}