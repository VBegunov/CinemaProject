package Cinema.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String greeting() {
        return "greeting";
    }

    @GetMapping("/cinemas")
    public String cinemas() {
        return "cinemas";
    }

    @GetMapping("/cinemas/{cinema_id}")
    public String cinema() {
        return "cinema";
    }
}
