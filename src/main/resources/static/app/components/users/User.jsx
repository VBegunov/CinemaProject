import React, {Component} from "react";
import {Formik} from 'formik';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import UserService from "./UserService";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class User extends Component {

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

        UserService.showUser(this.state.id).then( resp => {
            this.setState({
                username : resp.data.username,
                password : resp.data.password,
                active : resp.data.active,
                roles : resp.data.roles
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
        if (this.state.id == -1) {
            UserService.createUser(user)
                .then(() => this.props.history.push('/users'))
        } else {
            UserService.updateUser(user)
                .then(() => this.props.history.push('/users'))
        }
        console.log(user);
    }

    checkValue(value) {
        if (value == -1) {
            return null;
        } else {
            return (<TextField name="id" value={this.state.id} disabled/>);
        }
    }

    checkButton(user){
        if(this.state.id == -1){
            return "Создать";
        } else {
            return "Изменить";
        }
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
                                    <div>{this.checkValue(id)}</div>
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
                                        </div>
                                        <div>
                                            <FormControl>
                                                <InputLabel htmlFor="age-native-simple">Активность</InputLabel>
                                                <Select
                                                    native value={values.active}
                                                    onChange={handleChange} inputProps={{
                                                        name: 'active',
                                                        id: 'age-native-simple',
                                                    }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={true}>Действующий юзер</option>
                                                    <option value={false}>Заблокированный юзер</option>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <InputLabel htmlFor="age-native-simple">Роль</InputLabel>
                                                <Select
                                                    native
                                                    value={values.roles}
                                                    onChange={handleChange}
                                                    inputProps={{
                                                        name: 'roles',
                                                        id: 'age-native-simple',
                                                    }}
                                                    multiple={true}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={['ADMIN']}>ADMIN</option>
                                                    <option value={['USER']}>USER</option>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div>
                                        <br/>
                                        <Button variant="outlined" color="primary" size={"small"} type={"submit"}>
                                            {this.checkButton()}
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

export default User