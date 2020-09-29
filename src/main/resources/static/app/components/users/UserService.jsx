import axios from 'axios';

const USER_URL = 'http://localhost:8080/rest/users';

class UserService {

    getUsers() {
        return axios.get(`${USER_URL}`);
    }

    showUser(user_id) {
        return axios.get(`${USER_URL}/${user_id}`);
    }

    showThisUser() {
        return axios.get(`${USER_URL}/user`);
    }

    deleteUser(user_id) {
        return axios.delete(`${USER_URL}/${user_id}`);
    }

    updateUser(user) {
        return axios.put(`${USER_URL}`, user);
    }

    createUser(user) {
        console.log("create", user)
        return axios.post(`${USER_URL}`, user);
    }

    registrationUser(user) {
        console.log("create", user)
        return axios.post(`http://localhost:8080/registration`, user);
    }
}

export default new UserService()