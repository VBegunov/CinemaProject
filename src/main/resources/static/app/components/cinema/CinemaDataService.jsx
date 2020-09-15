import axios from 'axios';

const CINEMAS_API_URL = 'http://localhost:8080/rest';
const CINEMA_API_URL = '/cinemas';
const CINEMAS_URL = `${CINEMAS_API_URL}${CINEMA_API_URL}`;

class CinemaDataService {

    getCinemas() {
        console.log("cinemas");
        return axios.get(`${CINEMAS_URL}`);
    }

    showCinema(cinema_id) {
        return axios.get(`${CINEMAS_URL}/${cinema_id}`);
    }

    deleteCinema(cinema_id) {
        return axios.delete(`${CINEMAS_URL}/${cinema_id}`);
    }

    updateCinema(cinema, cinema_id) {
        console.log(cinema);
        console.log("update");
        return axios.put(`${CINEMAS_URL}/${cinema_id}`, cinema);
    }

    createCinema(cinema) {
        console.log(cinema);
        console.log("create");
        return axios.post(`${CINEMAS_URL}`, cinema);
    }
}

export default new CinemaDataService()