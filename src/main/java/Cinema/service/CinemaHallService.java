package Cinema.service;

import Cinema.model.CinemaHall;
import Cinema.repository.CinemaHallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CinemaHallService {

    @Autowired
    private CinemaHallRepository cinemaHallRepository;

    private boolean existsById(Long id) {
        return cinemaHallRepository.existsById(id);
    }

    public CinemaHall findById(Long id) {
        return cinemaHallRepository.findById(id).orElse(null);
    }

    public CinemaHall save(CinemaHall cinemaHall) throws Exception {
        if (cinemaHall.getCinemaHall_id() != null && existsById(cinemaHall.getCinemaHall_id())) {
            throw new Exception("Cinema with id: " + cinemaHall.getCinemaHall_id() + " already exists");
        }
        return cinemaHallRepository.save(cinemaHall);
    }

    public void update(CinemaHall cinemaHall) throws Exception {
        if (!existsById(cinemaHall.getCinemaHall_id())) {
            throw new Exception("Cannot find Cinema with id: " + cinemaHall.getCinemaHall_id());
        }
        cinemaHallRepository.save(cinemaHall);
    }

    public void deleteById(Long id) throws Exception {
        if (!existsById(id)) {
            throw new Exception("Cannot find CinemaHall with id: " + id);
        }
        else {
            cinemaHallRepository.deleteById(id);
        }
    }

    public Long count() {
        return cinemaHallRepository.count();
    }

    public List<CinemaHall> findAll() {
        return (List<CinemaHall>) cinemaHallRepository.findAll();
    }
}
