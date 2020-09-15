import React, {Component} from 'react';
import ReactDOM from "react-dom";
import ButtonAppBar from "./components/containers/bar/NavigationBar";

class App extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react'));