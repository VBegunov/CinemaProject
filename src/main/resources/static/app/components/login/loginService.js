import axios from 'axios';

const HOST_URL = 'http://localhost:8080';
const USER_URL = '/user';
const LOGIN_URL = '/login';
const LOGOUT_URL = '/logout';
const REGISTRATION_URL = '/registration';

class CinemaDataService {

    getUser(user_id) {
        return axios.get(`${HOST_URL}${USER_URL}/${user_id}`);
    }

    deleteUser(user_id) {
        return axios.delete(`${HOST_URL}/${user_id}`);
    }

    createUser(user){
        return axios.post(`${HOST_URL}${REGISTRATION_URL}`, user);
    }

    loginUser(user){
        console.log(user);
        return axios.post(`${HOST_URL}${LOGIN_URL}`, user);
    }

    logoutUser(user){
        return axios.post(`${HOST_URL}${LOGOUT_URL}`, user);
    }


    // updateCinema(cinema, cinema_id) {
    //     console.log(cinema);
    //     console.log("update");
    //     return axios.put(`${HOST_URL}/${cinema_id}`, cinema);
    // }
    //
    // createCinema(cinema) {
    //     console.log(cinema);
    //     console.log("create");
    //     return axios.post(`${HOST_URL}`, cinema);
    // }
}

export default new CinemaDataService()