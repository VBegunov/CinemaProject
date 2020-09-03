package Cinema.model;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
public class Cinema implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cinema_id;

    @NonNull
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "cinema", fetch = FetchType.EAGER)
    private List<CinemaHall> cinemaHalls;

    public Cinema() {}

    public Cinema(String name, User user) {
        this.user = user;
        this.name = name;
    }

    public Cinema(String name, List<CinemaHall> cinemaHalls) {
        this.name = name;
        this.cinemaHalls = cinemaHalls;
    }

    public String getUserName() {
        return user != null ? user.getUsername() : "<none>";
    }
}
