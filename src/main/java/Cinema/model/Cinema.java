package Cinema.model;

import lombok.Data;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data
public class Cinema implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cinema_id;

    @NonNull
    private String name;

//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @OneToMany(mappedBy = "cinema", fetch = FetchType.EAGER)
//    private List<CinemaHall> cinemaHalls;

    public Cinema() {
    }

    public Cinema(@NonNull String name) {
        this.name = name;
    }

    //    public Cinema(String name
//            ,User user
//    ) {
//        this.user = user;
//        this.name = name;
//    }

//    public Cinema(String name
//            , List<CinemaHall> cinemaHalls
//    ) {
//        this.name = name;
//        this.cinemaHalls = cinemaHalls;
//    }
//
//    public String getUserName() {
//        return user != null ? user.getUsername() : "<none>";
//    }
}
