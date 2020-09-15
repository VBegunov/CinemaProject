import React, {Component} from 'react';
import CinemaApp from "./CinemaApp";
import ButtonAppBar from "../containers/bar/NavigationBar";

class CinemasApp extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
                <CinemaApp/>
            </div>
        )
    }
}
export default CinemasApp