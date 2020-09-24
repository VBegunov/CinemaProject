import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import mainPage from "./components/app-mainPage";
import cinemasPage from "./components/app-cinemas";
import Cinema from "./components/cinema/Cinema";
import MenuAppBar from "./components/containers/bar/MenuAppBar";
import Users from "./components/users/Users"
import User from "./components/users/User"

class App extends Component {
    render() {
        return (
            <div>
                <MenuAppBar/>
                <BrowserRouter>
                    <Route exact path={"/"} component={mainPage}/>
                    <Route exact path={"/cinemas"} component={cinemasPage}/>
                    <Route exact path={"/cinemas/:cinema_id"} component={Cinema}/>
                    <Route exact path={"/users/:user_id"} component={User}/>
                    <Route exact path={"/users"} component={Users}/>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));