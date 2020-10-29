import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import SimpleDialogDemo from "./LoginDialog";
import UserService from "../../pages/users/UserService";

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

export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [authADMIN, setAuthADMIN] = React.useState(false);
    // const [auth, setAuth] = React.useState(false);
    const [username, setUsername] = React.useState('');

    useEffect(() => {
        UserService.showThisUser()
            .then(data => {
                if (data.data.active === true) {
                    setAuth(true);
                    data.data.roles.map(index => {
                        if (index === "ADMIN") {
                            setAuthADMIN(true);
                        }
                        setUsername(data.data.username)
                    })
                }
            }).catch();
    }, []);

    const logAdmin = () => {
        if (authADMIN) {
            return <div>
                <MenuItem onClick={handleClose} component={"a"} href={"/cinemas"}>Кинотеатры</MenuItem>
                <MenuItem onClick={handleClose} component={"a"} href={"/users"}>Пользователи</MenuItem>
            </div>;
        }
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAuth(false);
    };

    function checkLogin() {
        if (auth) {
            return <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" disabled>
                    {username}
                </Button>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenu}>
                    Menu
                </Button>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    {logAdmin()}
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        } else {
            return <div><SimpleDialogDemo/></div>;
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="static" style={{background: '#e1f5fe'}}>
                <Toolbar>
                    <Button href={"/"}>
                        <Typography variant="button" display="block">
                            Mane page
                        </Typography>
                    </Button>
                    <Typography variant="h6" className={classes.title}>
                        Photos
                    </Typography>
                    {checkLogin()}
                </Toolbar>
            </AppBar>
        </div>
    );
}
