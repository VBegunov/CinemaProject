import React, {Component} from 'react';
import CinemaApp from "./CinemaApp";
import ButtonAppBar from "../containers/bar/NavigationBar";

class CinemasApp extends Component {
    render() {
        return (<>
                <ButtonAppBar/>
                <CinemaApp/>
            </>
        )
    }
}
export default CinemasApp