import React, {Component} from 'react';
import ButtonAppBar from "./containers/bar/NavigationBar";
import ListCinemaComponent from "./cinema/ListCinemaComponent";

class cinemasPage extends Component {

    render() {
        return (
            <div>
                <ButtonAppBar/>
                <div align={"center"}>Список кинотеатров</div>
                <ListCinemaComponent/>
            </div>
        )
    }
}

export default cinemasPage