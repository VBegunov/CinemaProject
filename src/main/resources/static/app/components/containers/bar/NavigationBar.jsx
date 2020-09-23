import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CinemaDataService from "../../cinema/CinemaDataService";

class ButtonAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.checkAuth = this.checkAuth.bind(this);
        this.state = {isLoggedIn: null};
    }

    componentDidMount() {
        this.checkAuth();
    }

    checkAuth() {
        CinemaDataService.getCinemas().then(data => {
            if (typeof data.data == "object") this.setState({isLoggedIn: true});
        });
    }

    render() {
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

        let log;
        if (this.state.isLoggedIn) {
            log =
                <div> <Button color="inherit"  href={"logout"}>Выйти</Button>
                    <Button color="inherit" href={"/cinemas"}>Кинотеатры</Button> </div> ;
        } else {
            log = <Button color="inherit" href={"login"}>Войти</Button>;
        }

        return (
            <div style={useStyles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start"
                                    style={useStyles.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    href={"/"}>
                            <MenuIcon/>
                        </IconButton>

                        <Typography variant="h6" style={useStyles.title}>
                            Кинотеатры
                        </Typography>
                        {log}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default ButtonAppBar