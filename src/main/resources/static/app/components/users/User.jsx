import React, {useLayoutEffect} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import UserService from "./UserService";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        padding: '0 38px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    submit: {
        margin: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export default function SimpleSelect() {
    const classes = useStyles();
    const history = useHistory();
    const [id, setId] = React.useState(-1);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [active, setActive] = React.useState('');
    const [roles, setRoles] = React.useState([]);

    function getUser(){
        UserService.showUser(history.location.pathname.split(['/']).pop()).then(user => {
            if(history.location.pathname.split(['/']).pop() > 0){
                setId(user.data.id);
                setUsername(user.data.username);
                setPassword(user.data.password);
                setActive(user.data.active);
                setRoles(user.data.roles);
            }
        })
    }

    useLayoutEffect(() => {
        getUser()
    }, []);


    function onSubmit() {
        let user = {
            id: id,
            username: username,
            password: password,
            active: active,
            roles: roles,
        };
        if(id > 0){
            UserService.updateUser(user).then();
            history.push("/users");
        } else {
            UserService.createUser(user).then();
            history.push("/users");
        }
    }

    const handleChangeRoles = (event) => {
        setRoles(event.target.value);
    };
    const handleChangeActive = (event) => {
        setActive(event.target.value);
    };

    function checkActive() {
        if (active) {
            return "Активный пользователь"
        } else {
            return "Заблокированный пользователь"
        }
    }

    function checkUserCreateUpdate() {
        if(id=== -1){
            return "Создать"
        } else {
            return "Изменить"
        }
    }

    function checkRole() {
        let role;
        roles.map(index => role = index);
        if(role === 'ADMIN'){
            return "Администратор"
        } else{
            return "Пользователь"
        }
    }

    return (
        <Grid container spacing={0} direction="column" alignItems="center"
              justify="center" style={{minHeight: '80vh'}}>

            <Typography component="h1" variant="h5">Пользователь</Typography>

            <form className={classes.root} onSubmit={onSubmit}>
                <TextField id="standard-basic" label={id} disabled/>
                <br/>
                <TextField id="standard-basic" label={"Login"}
                           value={username} onChange={e => setUsername(e.target.value)}/>
                <br/>
                <TextField id="standard-basic" label={"Password"}
                           value={password} onChange={e => setPassword(e.target.value)}/>
                <br/>
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">Активность</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={active}
                        onChange={handleChangeActive}
                        input={<BootstrapInput/>}
                    >
                        <MenuItem value={active} disabled>
                            <em>{checkActive()}</em>
                        </MenuItem>
                        <MenuItem value={true}>Активный пользователь</MenuItem>
                        <MenuItem value={false}>Заблокированный пользователь</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">Роль</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={roles}
                        autoWidth
                        onChange={handleChangeRoles}
                        input={<BootstrapInput/>}
                    >
                        <MenuItem value={roles} disabled>
                            <em>{checkRole()}</em>
                        </MenuItem>
                        <MenuItem value={['ADMIN']}>Администратор</MenuItem>
                        <MenuItem value={['USER']}>Пользователь</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <Button type="submit" fullWidth
                        variant="contained" color="primary"
                        className={classes.submit}
                        >
                    <Typography component="h5">
                        {checkUserCreateUpdate()}
                    </Typography>
                </Button>
            </form>
        </Grid>
    );
}

