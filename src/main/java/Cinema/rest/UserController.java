package Cinema.rest;

import Cinema.model.User;
import Cinema.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public List<User> userList() {
        return userService.getUsers();
    }

    @GetMapping("{user_id}")
    public User getUser(@PathVariable("user_id") Long id) {
        return userService.findById(id);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{user_id}")
    public void deleteUser(@PathVariable("user_id") List list) {
        for(Object lll: list){
            System.out.println(lll.toString());
            userService.deleteById(Long.valueOf(lll.toString()));
        }
    }

    @PostMapping("{user_id}")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{user_id}")
    public User updateUser(@RequestBody User user) {
        return userService.update(user);
    }
}
