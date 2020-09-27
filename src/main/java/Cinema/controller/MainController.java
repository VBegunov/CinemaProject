package Cinema.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;

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

    @GetMapping("/users")
    public String userById() {
        return "users";
    }

    @GetMapping("/user")
    public String user() {
        return "profile";
    }

    @GetMapping(value = "/this_user")
    @ResponseBody
    public String currentUserName(Principal principal) {
        return principal.getName();
    }
}
