import React, {Component} from 'react';
import ListCinemaComponent from "./cinema/CinemaList";

class cinemasPage extends Component {

    render() {
        return (
            <div>
                <div align={"center"}>Список кинотеатров</div>
                <ListCinemaComponent/>
            </div>
        )
    }
}

export default cinemasPage