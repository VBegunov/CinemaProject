import axios from 'axios';

const CINEMAS_URL = 'http://localhost:8080/rest/cinemas';

class CinemaService {

    getCinemas() {
        return axios.get(`${CINEMAS_URL}`);
    }

    showCinema(cinema_id) {
        return axios.get(`${CINEMAS_URL}/${cinema_id}`);
    }

    deleteCinema(id) {
        return axios.delete(`${CINEMAS_URL}/${id}`);
    }

    updateCinema(cinema) {
        return axios.put(`${CINEMAS_URL}`, cinema);
    }

    createCinema(cinema) {
        return axios.post(`${CINEMAS_URL}`, cinema);
    }
}

export default new CinemaService()