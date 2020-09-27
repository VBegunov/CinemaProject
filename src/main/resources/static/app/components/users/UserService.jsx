import axios from 'axios';

const CINEMAS_API_URL = 'http://localhost:8080/rest';
const CINEMA_API_URL = '/users';
const CINEMAS_URL = `${CINEMAS_API_URL}${CINEMA_API_URL}`;

class UserService {

    getUsers() {
        return axios.get(`${CINEMAS_URL}`);
    }

    showUser(user_id) {
        return axios.get(`${CINEMAS_URL}/${user_id}`);
    }

    showThisUser() {
        return axios.get(`${CINEMAS_URL}/user`);
    }

    deleteUser(user_id) {
        return axios.delete(`${CINEMAS_URL}/${user_id}`);
    }

    updateUser(user) {
        console.log("update")
        return axios.put(`${CINEMAS_URL}/${user.id}`, user);
    }

    createUser(user) {
        console.log("create")
        return axios.post(`${CINEMAS_URL}/-1`, user);
    }

    authenticationUser () {
        return axios.get(`http://localhost:8080/this_user`);
    }
}

export default new UserService()