import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import CinemaDataService from "../../cinema/CinemaDataService";
import UserService from "../../users/UserService";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function MenuAppBar() {
    const classes = useStyles();

    const [authADMIN, setAuthADMIN] = React.useState(false);
    const [auth, setAuth] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        UserService.authenticationUser().then(data => {
            if (data.request.responseURL !== "http://localhost:8080/login") {
                setAuth(true);
                UserService.showThisUser()
                    .then(data => {
                        data.data.roles.map(index => {
                            if(index === "ADMIN") {
                                setAuthADMIN(true);
                            }
                        })
                    }).catch();
            }
        })
    }, []);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const logAdmin = () => {
        if (authADMIN) {
            return <Menu id="menu-appbar" anchorEl={anchorEl}
                         anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted
                         transformOrigin={{vertical: 'top', horizontal: 'right',}} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose} component={"a"} href={`/user`}>Профиль</MenuItem>
                <MenuItem onClick={handleClose} component={"a"} href={"/cinemas"}>Кинотеатры</MenuItem>
                <MenuItem onClick={handleClose} component={"a"} href={"/users"}>Пользователи</MenuItem>
                <MenuItem onClick={handleClose} component={"a"} href={"/logout"}>Выйти</MenuItem>
            </Menu>;
        }
        if (auth) {
            return <Menu id="menu-appbar" anchorEl={anchorEl}
                         anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted
                         transformOrigin={{vertical: 'top', horizontal: 'right',}} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose} component={"a"} href={`/user`}>Профиль</MenuItem>
                <MenuItem onClick={handleClose} component={"a"} href={"/logout"}>Выйти</MenuItem>
            </Menu>;
        }
    };

    const login = () => {
        if (auth === false) {
            return <Button color="inherit" href={"login"}>Войти</Button>
        }
        if (auth === true) {
            return <div>
                <IconButton
                    aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
                    onClick={handleMenu} color="inherit">
                    <AccountCircle/>
                </IconButton>
                {logAdmin()}
            </div>
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                href={"/"}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Cinemas</Typography>
                    {login()}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuAppBar
