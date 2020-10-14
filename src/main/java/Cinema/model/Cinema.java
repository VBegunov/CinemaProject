package Cinema.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Cinema implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cinema_id;

    @NonNull
    private String name;

    public Cinema(String name){
        this.name = name;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
//
//    @OneToMany(mappedBy = "cinema", fetch = FetchType.EAGER)
//    private List<CinemaHall> cinemaHalls;

    public String getUser() {
        return user != null ? user.getUsername() : "<none>";
    }
}
