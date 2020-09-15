import React, { Component } from 'react';
import ListCinemaComponent from './ListCinemaComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CinemaComponent from './CinemaComponent';
import Login from "../login/containerUSER/login";
import Registration from "../login/containerUSER/Registration";

class CinemaApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path={"/login"}> <Login/> </Route>
                        <Route path={"/registration"}> <Registration/> </Route>
                        {/*<Route path="/" exact component={ListCinemaComponent} />*/}
                        <Route path="/cinemas" exact component={ListCinemaComponent} />
                        <Route path="/cinema/:cinema_id" component={CinemaComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default CinemaApp