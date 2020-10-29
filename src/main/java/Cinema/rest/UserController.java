package Cinema.rest;

import Cinema.model.User;
import Cinema.model.ViewUser;
import Cinema.service.UserService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @JsonView(ViewUser.REST.class)
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public List<User> userList() {
        return userService.getUsers();
    }

    @JsonView(ViewUser.REST.class)
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @JsonView(ViewUser.REST.class)
    @GetMapping("/user")
    public User getThisUser(@AuthenticationPrincipal User user) {
        return user;
    }

    @JsonView(ViewUser.REST.class)
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") List list) {
        for (Object idUser : list) {
            userService.deleteById(Long.valueOf(idUser.toString()));
        }
    }

    @JsonView(ViewUser.REST.class)
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = new User();
        newUser.setPassword(user.getPassword());
        newUser.setUsername(user.getUsername());
        newUser.setActive(user.isActive());
        newUser.setRoles(user.getRoles());
        return ResponseEntity.ok().body(userService.save(newUser));
    }

    @JsonView(ViewUser.REST.class)
    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updateUser = userService.findById(user.getId());
        updateUser.setUsername(user.getUsername());
        updateUser.setPassword(user.getPassword());
        updateUser.setRoles(user.getRoles());
        updateUser.setActive(user.isActive());
        return ResponseEntity.ok().body(userService.update(updateUser));
    }
}
