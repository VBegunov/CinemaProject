package Cinema.rest;

import Cinema.model.Cinema;
import Cinema.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/rest/cinemas")
@PreAuthorize("hasAuthority('ADMIN')")
public class CinemaController {

    private final CinemaService cinemaService;

    @Autowired
    public CinemaController(CinemaService cinemaService) {
        this.cinemaService = cinemaService;
    }

    @GetMapping
    public List<Cinema> getCinemas() {
        return cinemaService.findAll();
    }

    @GetMapping("/{cinema_id}")
    public Cinema getCinemaById(@PathVariable("cinema_id") long id) {
        return cinemaService.findById(id);
    }

    @DeleteMapping("/{cinema_id}")
    public void deleteCinema(@PathVariable("cinema_id") long id) throws Exception {
        System.out.println("Delete");
        cinemaService.deleteById(id);
    }

    @PutMapping("/{cinema_id}")
    public ResponseEntity<Cinema> updateCinema(@RequestBody Cinema cinema) throws Exception {
        return ResponseEntity.ok().body(cinemaService.update(cinema));
    }

    @PostMapping("/{cinema_id}")
    public ResponseEntity<Cinema> createCinema(@RequestBody Cinema cinema) throws Exception {
        if (cinema.getCinema_id() == -1) {
            Cinema newCinema = new Cinema();
            newCinema.setName(cinema.getName());
            return ResponseEntity.ok().body(cinemaService.save(newCinema));
        } else {
            return ResponseEntity.ok().body(cinema);
        }
    }
}
