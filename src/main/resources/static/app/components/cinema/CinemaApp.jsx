import React, {Component} from 'react';
import ListCinemaComponent from './ListCinemaComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CinemaComponent from './CinemaComponent';
import ButtonAppBar from "../containers/bar/NavigationBar";

class CinemaApp extends Component {
    render() {
        return (
            <Router>
                    <Switch>
                        <ButtonAppBar/>
                        <Route path="/" exact Сomponent={ListCinemaComponent} />
                        <Route path="/cinemas" exact Сomponent={ListCinemaComponent} />
                        <Route path="/cinemas/:cinema_id" Сomponent={CinemaComponent} />
                    </Switch>
            </Router>
        )
    }
}

export default CinemaApp