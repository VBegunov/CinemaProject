import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import MenuAppBar from "./app/components/bar/MenuAppBar";
import MainPage from "./app/pages/MainPage";

export default function App() {
    return (
        <div>
            <header><MenuAppBar/></header>
            <main>
                <BrowserRouter forceRefresh={true}>
                    <Route exact path={"/"} component={MainPage}/>
                </BrowserRouter>
            </main>
        </div>
    )

}
