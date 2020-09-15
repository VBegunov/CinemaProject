import React, {Component} from "react";
import CinemaDataService from "./CinemaDataService";
import {makeStyles, styled, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

class ListCinemaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cinemas: [],
            message: null
        };
        this.getCinemas = this.getCinemas.bind(this);
        this.deleteCinemaClicked = this.deleteCinemaClicked.bind(this);
        this.updateCinemaClicked = this.updateCinemaClicked.bind(this);
        this.addCinemaClicked = this.addCinemaClicked.bind(this);
    }

    componentDidMount() {
        this.getCinemas();
    }

    getCinemas() {
        CinemaDataService.getCinemas()
            .then(
                cinema => {
                    console.log(cinema);
                    if(typeof cinema.data !== "string"){
                        this.setState({cinemas: cinema.data})
                    }
                }
            )
    }

    deleteCinemaClicked(cinema_id) {
        CinemaDataService.deleteCinema(cinema_id)
            .then(
                response => {
                    this.setState({message: `Delete of course ${cinema_id} Successful`});
                    this.getCinemas()
                }
            )

    }

    addCinemaClicked() {
        this.props.history.push(`/cinemas/-1`);
    }

    updateCinemaClicked(cinema_id) {
        console.log('update ' + cinema_id);
        this.props.history.push(`/cinemas/${cinema_id}`)
    }

    render() {
        return (
            <React.Fragment>

                <TableContainer component={Paper}>
                    <Table
                        className={useStyles.table}
                        aria-label="customized table" size={"small"}
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>id</StyledTableCell>
                                <StyledTableCell align="center">Название кинотеатра</StyledTableCell>
                                <StyledTableCell align="left"> Прочее </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.cinemas}
                            {
                                this.state.cinemas.map((row) => (
                                    <StyledTableRow key={row.cinema_id}>
                                        <StyledTableCell align="left">{row.cinema_id}</StyledTableCell>
                                        <StyledTableCell align="left">{row.name} </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <MyButton
                                                onClick={() => this.updateCinemaClicked(row.cinema_id)}> Изменить </MyButton>
                                            <MyButton
                                                onClick={() => this.deleteCinemaClicked(row.cinema_id)}> Удалить </MyButton>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div align={"center"}><MyButton onClick={() => this.addCinemaClicked()}> Создать </MyButton></div>
            </React.Fragment>
        )
    }
}

const StyledTableCell = withStyles((theme) => ({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
                minWidth: 1,
                maxWidth: 50
            },
            body: {
                fontSize: 15,
            },   }))
(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 25,
    padding: '0 15px',
});

export default ListCinemaComponent