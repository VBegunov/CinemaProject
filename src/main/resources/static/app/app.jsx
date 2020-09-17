import React, {Component} from 'react';
import ReactDOM from "react-dom";
import CinemaDataService from "./components/cinema/CinemaDataService";
import {BrowserRouter ,Router, Route, Switch} from 'react-router-dom';
import mainPage from "./components/app-mainPage";
import cinemasPage from "./components/app-cinemas";
import CinemaComponent from "./components/cinema/CinemaComponent";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/*<div>*/}
                    <Route exact path={"/"}  component={mainPage} />
                    <Route exact path={"/cinemas"}  component={cinemasPage}/>
                    <Route exact path={"/cinemas/:cinema_id"}  component={CinemaComponent}/>
                {/*</div>*/}
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));