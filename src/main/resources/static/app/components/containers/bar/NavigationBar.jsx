import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                href={"/"}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="button" className={classes.title} >
                        Кинотеатры
                    </Typography>


                    <Button color="inherit" href={"login"}>Войти</Button>
                    <Button color="inherit" href={"logout"}>Выйти</Button>
                    <Button color="inherit" href={"/cinemas"}>Кинотеатры</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}