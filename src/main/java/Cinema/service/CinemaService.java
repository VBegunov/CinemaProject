package Cinema.service;

import Cinema.model.Cinema;
import Cinema.model.User;
import Cinema.repository.CinemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class CinemaService {

    private final CinemaRepository cinemaRepository;
    private final UserService userService;

    @Autowired
    public CinemaService(CinemaRepository cinemaRepository, UserService userService) {
        this.cinemaRepository = cinemaRepository;
        this.userService = userService;
    }


    private boolean existsById(Long id) {
        return cinemaRepository.existsById(id);
    }

    public Cinema findById(Long id) {
        return cinemaRepository.findById(id).orElse(null);
    }

    public Cinema create(Cinema cinema) throws Exception {
        if (StringUtils.isEmpty(cinema.getName())) {
            throw new Exception("Name is required");
        }
        if (cinema.getCinema_id() != null && existsById(cinema.getCinema_id())) {
            throw new Exception("Cinema with id: " + cinema.getCinema_id() + " already exists");
        }
        Cinema createCinema = new Cinema();
        createCinema.setName(cinema.getName());
        createCinema.setUser((User) userService.loadUserByUsername(cinema.getUser()));
        return cinemaRepository.save(createCinema);
    }

    public Cinema update(Cinema cinema) throws Exception {
        if (StringUtils.isEmpty(cinema.getName())) {
            throw new Exception("Name is required");
        }
        if (!existsById(cinema.getCinema_id())) {
            throw new Exception("Cannot find Cinema with id: " + cinema.getCinema_id());
        }
        Cinema newCinema = new Cinema();
        newCinema.setName(cinema.getName());
        return cinemaRepository.save(cinema);
    }

    public void deleteById(Long id) throws Exception {
        if (!existsById(id)) {
            throw new Exception("Cannot find Cinema with id: " + id);
        } else {
            cinemaRepository.deleteById(id);
        }
    }

    public Long count() {
        return cinemaRepository.count();
    }

    public List<Cinema> findByName(String name) {
        return cinemaRepository.findByName(name);
    }

    public List<Cinema> findAll() {
        return (List<Cinema>) cinemaRepository.findAll();
    }
}