package Cinema.rest;

import Cinema.model.Role;
import Cinema.model.User;
import Cinema.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @GetMapping("/user")
    public User getThisUser(@AuthenticationPrincipal User user) {
        return user;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") List list) {
        for (Object lll : list) {
            System.out.println(lll.toString());
            userService.deleteById(Long.valueOf(lll.toString()));
        }
    }

    @PostMapping("/{id}")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = new User();
        newUser.setPassword(user.getPassword());
        newUser.setUsername(user.getUsername());
        newUser.setActive(user.isActive());
        newUser.setRoles(user.getRoles());
        System.out.println(newUser + "create");
        return ResponseEntity.ok().body(userService.save(newUser));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable long id) {
        User updateUser = userService.findById(id);
        updateUser.setUsername(user.getUsername());
        updateUser.setPassword(user.getPassword());
        updateUser.setRoles(user.getRoles());
        updateUser.setActive(user.isActive());
        System.out.println(updateUser + "update");
        return ResponseEntity.ok().body(userService.update(updateUser));
    }
}
