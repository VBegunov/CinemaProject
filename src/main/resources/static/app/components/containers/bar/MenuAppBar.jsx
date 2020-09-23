import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import CinemaDataService from "../../cinema/CinemaDataService";

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

const classes = useStyles();
const [auth, setAuth] = React.useState(false);
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleChange = (event) => {

    setAuth(event.target.checked);
};

const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};

function LogIn(props) {
    return <Button color="inherit" href={"login"}>Войти</Button>;
}

function LogOut(props) {
    return <div>
        <FormGroup>
            <FormControlLabel
                control={<Switch checked={auth} onChange={handleChange} aria-label={"login switch"}/>}
                label={auth ? 'Logout' : 'Login'}
            />
        </FormGroup>
    </div>;
}



class MenuAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            isLogin : ''
        };
    }

    CheckAuth() {
        CinemaDataService.getCinemas()
            .then(result => {
                this.state.isLogin = true; console.log('success:', result, this.state.isLogin); })
            .catch(error => {
                this.state.isLogin = false ; console.log('error:', error, this.state.isLogin);
                });

        if(this.state.isLogin === true){
            return <LogIn/>
        } else {
            return <LogOut/>
        }
    }

    render() {
        return (
            <div className={classes.root}>

                <AppBar position="static">
                    <Toolbar>

                        <IconButton edge="start"
                                    className={useStyles.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    href={"/"}>
                            <MenuIcon/>
                        </IconButton>


                        <Typography variant="h6" className={classes.title}>
                            КИНОТЕАТРЫ
                        </Typography>

                        <CheckAuth/>

                        {auth && (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >

                                    <AccountCircle/>
                                </IconButton>
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
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default MenuAppBar
