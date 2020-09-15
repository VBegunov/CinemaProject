import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (

            <div align={"center"} className="Login">
                <br/>
                <br/>
                <br/>
                <br/>

                <b> Регистрация </b>

                <br/>
                {/*<form action="/login" method="post">
                    <div><label> User Name : <input type="text" name="username"/> </label></div>
                    <div><label> Password: <input type="password" name="password"/> </label></div>
                    <input type="hidden" name="_csrf" value="{_csrf.token}" />
                    <div><input type="submit" value="Войти"/></div>
                </form>

                <form action="/logout" method="post">
                    <input type="hidden" name="_csrf" value="{_csrf.token}" />
                    <input type="submit" value="Выйти"/>
                </form>*/}

                <br/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username" size="large">
                        <Form.Control
                            autoFocus
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" size="large">
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </Form.Group>
                    <Button block size="large" disabled={!this.validateForm()} type="submit">Зарегистрироваться</Button>
                </Form>
            </div>
        );
    }
}