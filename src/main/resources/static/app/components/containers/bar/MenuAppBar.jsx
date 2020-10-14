import React, {useEffect} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import UserService from "../../users/UserService";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

function MenuAppBar() {

    const [authADMIN, setAuthADMIN] = React.useState(false);
    const [auth, setAuth] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        UserService.showThisUser()
            .then(data => {
                if (data.data.active === true) {
                    setAuth(true);
                    data.data.roles.map(index => {
                        if (index === "ADMIN") {
                            setAuthADMIN(true);
                        }
                        setUsername(data.data.username)
                    })
                }
            }).catch();
    }, []);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const logAdmin = () => {
        if (authADMIN) {
            return <div>
                <MenuItem onClick={handleClose} component={"a"} href={"/cinemas"}>Кинотеатры</MenuItem>
                <MenuItem onClick={handleClose} component={"a"} href={"/users"}>Пользователи</MenuItem>
            </div>;
        }
    };

    const login = () => {
        if (!auth) {
            return <Button color="inherit" href={"login"}> <Typography> Войти </Typography> </Button>
        } else {
            return <Box>
                <Button aria-controls="simple-menu" aria-haspopup="true" disabled>
                    {username}
                </Button>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} component={"a"} href={`/profile`}>Профиль</MenuItem>
                    {logAdmin()}
                    <MenuItem onClick={handleClose} component={"a"} href={`/logout`}>Выйти</MenuItem>
                </Menu>
            </Box>

        }
    };

    return (
        <Box bgcolor="#e1f5fe" boxShadow={3} display="flex" justifyContent="flex-end" m={1} p={1}>
            <Box flexGrow={1} bgcolor="">
                <Button href="/">
                    Кинотеатры
                </Button>
            </Box>
            {login()}
        </Box>
    );
}

export default MenuAppBar
