package Cinema.model;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Cinema implements Serializable {
    @JsonView(ViewCinema.UI.class)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cinema_id;

    @JsonView(ViewCinema.UI.class)
    @NonNull
    private String name;

    @JsonView(ViewCinema.REST.class)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    public Cinema(String name){
        this.name = name;
    }


//
//    @OneToMany(mappedBy = "cinema", fetch = FetchType.EAGER)
//    private List<CinemaHall> cinemaHalls;

    @JsonView(ViewCinema.UI.class)
    public String getUserName() {
        return user != null ? user.getUsername() : "<none>";
    }
}
