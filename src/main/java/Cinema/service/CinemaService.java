package Cinema.service;

import Cinema.model.Cinema;
import Cinema.repository.CinemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class CinemaService {

    @Autowired
    private CinemaRepository cinemaRepository;

    private boolean existsById(Long id) {
        return cinemaRepository.existsById(id);
    }

    public Cinema findById(Long id) {
        return cinemaRepository.findById(id).orElse(null);
    }

    public List<Cinema> findAll(int pageNumber, int rowPerPage) {
        List<Cinema> cinemas = new ArrayList<>();
        Pageable sortedByLastUpdateDesc = PageRequest.of(pageNumber - 1, rowPerPage,
                Sort.by("name").ascending());
        cinemaRepository.findAll(sortedByLastUpdateDesc).forEach(cinemas::add);
        return cinemas;
    }

    public Cinema save(Cinema cinema) throws Exception {
        if (StringUtils.isEmpty(cinema.getName())) {
            throw new Exception("Name is required");
        }
        if (cinema.getCinema_id() != null && existsById(cinema.getCinema_id())) {
            throw new Exception("Cinema with id: " + cinema.getCinema_id() + " already exists");
        }
        return cinemaRepository.save(cinema);
    }

    public void update(Cinema cinema) throws Exception {
        if (StringUtils.isEmpty(cinema.getName())) {
            throw new Exception("Name is required");
        }
        if (!existsById(cinema.getCinema_id())) {
            throw new Exception("Cannot find Cinema with id: " + cinema.getCinema_id());
        }
        cinemaRepository.save(cinema);
    }

    public void deleteById(Long id) throws Exception {
        if (!existsById(id)) {
            throw new Exception("Cannot find Cinema with id: " + id);
        }
        else {
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