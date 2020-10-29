package Cinema.rest;

import Cinema.model.Cinema;
import Cinema.model.User;
import Cinema.model.ViewCinema;
import Cinema.service.CinemaService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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

    @JsonView(ViewCinema.UI.class)
    @GetMapping
    public List<Cinema> getCinemas() {
        return cinemaService.findAll();
    }

    @JsonView(ViewCinema.UI.class)
    @GetMapping("/{id}")
    public Cinema getCinemaById(@PathVariable("id") long id) {
        return cinemaService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteCinema(@PathVariable("id") List list) throws Exception {
        for (Object id : list) {
            cinemaService.deleteById(Long.valueOf(id.toString()));
        }
    }

    @JsonView(ViewCinema.UI.class)
    @PutMapping
    public ResponseEntity<Cinema> updateCinema(@RequestBody Cinema cinema, @AuthenticationPrincipal User user) throws Exception {
        cinema.setUser(user);
        return ResponseEntity.ok().body(cinemaService.update(cinema));
    }

    @JsonView(ViewCinema.UI.class)
    @PostMapping
    public ResponseEntity<Cinema> createCinema(@RequestBody Cinema cinema, @AuthenticationPrincipal User user) throws Exception {
        cinema.setUser(user);
        return ResponseEntity.status(201).body(cinemaService.create(cinema));
    }
}
