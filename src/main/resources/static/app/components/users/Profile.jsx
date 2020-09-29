import React, {Component} from "react";
import {Formik} from 'formik';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import UserService from "./UserService";


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            username: '',
            password: '',
            active: '',
            roles: []
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

        UserService.showThisUser(this.state.id).then(resp => {
            this.setState({
                username: resp.data.username,
                password: resp.data.password,
                active: resp.data.active,
                roles: resp.data.roles
            })
        })
    }

    onSubmit(values) {
        let user = {
            id: this.state.id,
            username: values.username,
            password: values.password,
            active: values.active,
            roles: values.roles
        };
        UserService.updateUser(user)
            .then(() => this.props.history.push('/'));
    }

    render() {
        let {username, password, id, active, roles} = this.state;
        return (
            <div>
                <h3>Кинотеатра</h3>
                <div className="container">
                    <Formik
                        initialValues={{id, username, password, active, roles}}
                        onSubmit={this.onSubmit}>
                        {
                            ({values, handleChange, handleBlur, handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
                                    <TextField name="id" type="hidden" value={this.state.id} disabled/>
                                    <div>
                                        <div>
                                            <TextField id="standard-textarea"
                                                       name={"username"} value={values.username} label={username}
                                                       onChange={handleChange} onBlur={handleBlur}
                                                       placeholder={"Логин"}
                                            />
                                        </div>
                                        <div>
                                            <TextField id="standard-textarea"
                                                       name={"password"} value={values.password} label={password}
                                                       onChange={handleChange} onBlur={handleBlur}
                                                       placeholder={"Пароль"}
                                            />
                                            <TextField name="active" type="hidden" value={this.state.active} disabled/>
                                            <TextField name="roles" type="hidden" value={this.state.roles} disabled/>
                                        </div>
                                    </div>
                                    <div>
                                        <br/>
                                        <Button variant="outlined" color="primary" size={"small"} type={"submit"}>
                                            Изменить
                                        </Button>
                                    </div>
                                </form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default Profile