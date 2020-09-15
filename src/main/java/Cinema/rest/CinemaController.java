package Cinema.rest;

import Cinema.model.Cinema;
import Cinema.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//import org.springframework.security.core.annotation.AuthenticationPrincipal;

@RestController
@RequestMapping("/rest/cinemas")
public class CinemaController {

    private final CinemaService cinemaService;

    @Autowired
    public CinemaController(CinemaService cinemaService) {
        this.cinemaService = cinemaService;
    }

    @GetMapping
    public List<Cinema> getCinemas(){
        return cinemaService.findAll();
    }

//    @GetMapping
//    public ResponseEntity<?> getCinemas(){
//        return ResponseEntity.ok().body(cinemaService.findAll());
//    }

    @GetMapping("/{id}")
    public Cinema getCinemaById(@PathVariable("id") long id){
        return cinemaService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteCinema(@PathVariable("id") long id) throws Exception {
        cinemaService.deleteById(id);
    }
}
