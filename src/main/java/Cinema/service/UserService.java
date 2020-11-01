package Cinema.service;

import Cinema.model.User;
import Cinema.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Objects;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username);
    }

    public User update(User user) throws Exception {
        User updateUser = userRepository.findById(user.getId()).orElseThrow(() -> new Exception("User is not found"));
        updateUser.setUsername(user.getUsername());
        updateUser.setPassword(user.getPassword());
        updateUser.setRoles(user.getRoles());
        updateUser.setActive(user.isActive());
        System.out.println(updateUser + "update");
        return userRepository.save(updateUser);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    private boolean existsById(Long id) {
        return userRepository.existsById(id);
    }

    public User create(User user) throws Exception {
        if (StringUtils.isEmpty(user.getUsername())) {
            throw new Exception("Name is required");
        }
        if (user.getId() != null && existsById(user.getId())) {
            throw new Exception("Cinema with id: " + user.getId() + " already exists");
        }
        User newUser = new User();
        newUser.setPassword(user.getPassword());
        newUser.setUsername(user.getUsername());
        newUser.setActive(user.isActive());
        newUser.setRoles(user.getRoles());
        System.out.println(newUser + "create");
        return userRepository.save(newUser);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
