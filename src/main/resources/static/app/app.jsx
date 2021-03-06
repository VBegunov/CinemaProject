import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import mainPage from "./components/app-mainPage";
import cinemasPage from "./components/app-cinemas";
import Cinema from "./components/cinema/Cinema";
import MenuAppBar from "./components/containers/bar/MenuAppBar";
import Users from "./components/users/Users"
import User from "./components/users/User"
import Profile from "./components/users/Profile"
import Login from "./components/users/Login";
import Registration from "./components/users/Registration";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class App extends Component {
    render() {
        return (
            <div>
                <MenuAppBar/>
                <BrowserRouter forceRefresh={true}>
                    <Route exact path={"/"} component={mainPage}/>
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/cinemas"} component={cinemasPage}/>
                    <Route exact path={"/cinemas/:cinema_id"} component={Cinema}/>
                    <Route exact path={"/users/:id"} component={User}/>
                    <Route exact path={"/users"} component={Users}/>
                    <Route exact path={"/profile"} component={Profile}/>
                    <Route exact path={"/registration"} component={Registration}/>
                </BrowserRouter>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </div>
        )
    }
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

ReactDOM.render(<App/>, document.getElementById('react'));