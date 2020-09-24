package Cinema.service;

import Cinema.model.Role;
import Cinema.model.User;
import Cinema.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public User update(User user) {
        return userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User save(User user) {
        User newUser = new User();
        newUser.setActive(true);
        newUser.setRoles(Collections.singleton(Role.USER));
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        return newUser;
    }

    public void deleteById(Long id){
        userRepository.deleteById(id);
    }


}
