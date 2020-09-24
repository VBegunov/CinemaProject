import React, {Component} from "react";
import {Formik} from 'formik';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";


class Cinema extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cinema_id: this.props.match.params.cinema_id,
            name: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        CinemaDataService.showCinema(this.state.cinema_id)
            .then(response => this.setState({
                name: response.data.name
            }))
    }

    onSubmit(values) {
        let cinema = {
            cinema_id: this.state.cinema_id,
            name: values.name
        };
        if (this.state.cinema_id == -1) {
            CinemaDataService.createCinema(cinema)
                .then(() => this.props.history.push('/cinemas'))
        } else {
            CinemaDataService.updateCinema(cinema)
                .then(() => this.props.history.push('/cinemas'))
        }
        console.log(cinema);
    }

    checkValue(value) {
        if (value == -1) {
            return null;
        } else {
            return (<TextField name="cinema_id"
                               value={this.state.cinema_id}
                               disabled/>);
        }
    }

    checkButton(){
        if(this.state.cinema_id == -1){
            return "Создать";
        } else {
            return "Изменить";
        }
    }

    render() {
        let {name, cinema_id} = this.state;
        return (
            <div>
                <h3>Кинотеатра</h3>
                <div className="container">
                    <Formik
                        initialValues={{cinema_id, name}}
                        onSubmit={this.onSubmit}>
                        {
                            ({values, handleChange, handleBlur, handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
                                    <div>{this.checkValue(cinema_id)}</div>
                                    <div>
                                        <TextField id="standard-textarea"
                                                   name={"name"} value={values.name} label={name}
                                                   onChange={handleChange} onBlur={handleBlur}
                                                   placeholder={"Название кинотеатра"}
                                        />
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

export default Cinema