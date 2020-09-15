import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonStyle from '@material-ui/core/Button';
import loginService from "../loginService";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
        console.log(this.state);
        loginService.loginUser(this.state).then();
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {

        return (

            <div
                align={"center"}
                // className="Login"
            style={Login.contextType}>

                <b> Добро пожаловать </b>

                <br/>
                <form action="/login" method="post">
                    <div><label> User Name : <input type="text" name="username"/> </label></div>
                    <div><label> Password: <input type="password" name="password"/> </label></div>
                    <input type="hidden" name="_csrf" value="{_csrf.token}" />
                    <div><input onClick={() => this.loginUser() } type="submit" value="Войти"/></div>
                </form>

                <form action="/logout" method="post">
                    <input type="hidden" name="_csrf" value="{_csrf.token}" />
                    <input  onClick={()=> loginService.logoutUser(this.state)} type="submit" value="Выйти"/>
                </form>

                <br/>
                <Form
                    onSubmit={this.handleSubmit}
                >
                    <Form.Group
                        controlId="username" size="large">
                        <Form.Control
                            autoFocus
                            type="text"
                            // id="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="password"
                        size="large">
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            // id="password"
                            name="password"

                        />
                    </Form.Group>

                    <Button
                        block size="large"
                        onClick={() => this.loginUser()}
                        disabled={!this.validateForm()}
                        type="submit">Войти</Button>

                    <div>
                        <br/>
                        <ButtonStyle variant="contained" color="primary" size={"large"}
                                     href="/registration">Регистрация</ButtonStyle>
                    </div>
                </Form>
            </div>
        );
    }
}