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

    @GetMapping("/users/{user_id}")
    public String users() {
        return "user";
    }

    @GetMapping("/user")
    public String profile() {
        return "profile";
    }

    @GetMapping("/users")
    public String userById() {
        return "users";
    }
}
