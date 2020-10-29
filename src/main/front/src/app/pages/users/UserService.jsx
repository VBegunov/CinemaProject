import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';

const USER_URL = 'http://localhost:8080/rest/users';

class UserService {

    login(user){
        return axios.post('http://localhost:8080/login', user)
    }

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
        return axios.post(`${USER_URL}`, user);
    }

    registrationUser(user) {
        return axios.post(`http://localhost:8080/registration`, user);
    }
}

export default new UserService()