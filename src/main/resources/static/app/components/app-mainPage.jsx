import React from 'react';
import ButtonAppBar from "./containers/bar/NavigationBar";

class mainPage extends React.Component{

    render() {
        return (
            <div>
                <ButtonAppBar/>
                <div>Сеть кинотеатров (ТЕСТ)</div>
            </div>
        )
    }
}

export default mainPage