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

    @DeleteMapping("/{id}")
    public void deleteCinema(@PathVariable("id") List list) throws Exception {
        for(Object id: list){
            cinemaService.deleteById(Long.valueOf(id.toString()));
        }
    }

    @PutMapping
    public ResponseEntity<Cinema> updateCinema(@RequestBody Cinema cinema) throws Exception {
        Cinema updateCinema = cinemaService.findById(cinema.getCinema_id());
        updateCinema.setName(cinema.getName());
        return ResponseEntity.ok().body(cinemaService.update(updateCinema));
    }

    @PostMapping
    public ResponseEntity<Cinema> createCinema(@RequestBody Cinema cinema) throws Exception {
        Cinema newCinema = new Cinema();
        newCinema.setName(cinema.getName());
        return ResponseEntity.ok().body(cinemaService.save(newCinema));
    }
}
