import React, {Component} from 'react';
import ReactDOM from "react-dom";
import CinemaDataService from "./components/cinema/CinemaDataService";
import ButtonAppBar from "./components/containers/bar/NavigationBar";
import CinemaApp from "./components/cinema/CinemaApp";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cinemas: [],
            message: null
        };
        this.getCinemas = this.getCinemas.bind(this);
    }

    componentDidMount() {
        this.getCinemas();
    }

    getCinemas() {
        CinemaDataService.getCinemas()
            .then(
                cinema => {
                    console.log(cinema);
                    console.log(typeof cinema.data);
                    if(typeof cinema.data !== "string"){
                        this.setState(
                            {cinemas: cinema.data}
                        );
                    }
                }
            )
    }

    render() {
        return (
            <div>

                <CinemaApp/>
                {/*<ButtonAppBar/>

                <div>Сеть кинотеатров (ТЕСТ)</div>


                <div>
                    Test
                    {this.state.cinemas.map(cinema =>
                        <div key={cinema.cinema_id}>
                            {cinema.name}
                        </div>
                    )}
                </div>*/}


            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));