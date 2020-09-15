import React, {Component} from 'react';
import ListCinemaComponent from './ListCinemaComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CinemaComponent from './CinemaComponent';
import ButtonAppBar from "../containers/bar/NavigationBar";

class CinemaApp extends Component {
    render() {
        return (
            <Router>
                {/*<>*/}
                    <Switch>
                        <ButtonAppBar/>
                        <Route path="/" exact component={ListCinemaComponent} />
                        <Route path="/cinemas" exact component={ListCinemaComponent} />
                        <Route path="/cinema/:cinema_id" component={CinemaComponent} />
                    </Switch>
                {/*</>*/}
            </Router>
        )
    }
}

export default CinemaApp