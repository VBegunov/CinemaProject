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

    deleteUser(user_id) {
        return axios.delete(`${CINEMAS_URL}/${user_id}`);
    }

    updateUser(user, user_id) {
        return axios.put(`${CINEMAS_URL}/${user_id}`, user);
    }

    createUser(user) {
        return axios.post(`${CINEMAS_URL}/-1`, user);
    }
}

export default new UserService()