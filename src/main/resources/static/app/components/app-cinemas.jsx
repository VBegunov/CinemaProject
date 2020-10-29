import React, {Component} from 'react';
import ListCinema from "./cinema/CinemaList";

class cinemasPage extends Component {

    render() {
        return (
            <div>
                <div align={"center"}>Список кинотеатров</div>
                <ListCinema/>
            </div>
        )
    }
}

export default cinemasPage