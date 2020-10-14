package Cinema.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String main() {
        return "main";
    }

    @GetMapping("/cinemas")
    public String cinemas() {
        return "cinemas";
    }

    @GetMapping("/cinemas/{cinema_id}")
    public String cinema() {
        return "cinema";
    }

    @GetMapping("/users")
    public String users() {
        return "users";
    }

    @GetMapping("/users/{user_id}")
    public String userById() {
        return "user";
    }

    @GetMapping("/profile")
    public String profile() {
        return "profile";
    }
}
