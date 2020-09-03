package Cinema.model;


import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter @Setter @ToString
public class CinemaHall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cinemaHall_id;

//    private HallType typeCinemaHall;
    @NonNull
    private int rowCount;

    @NonNull
    private int placeCount;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cinema_id")
    private Cinema cinema;

    public CinemaHall() {
    }

    public CinemaHall(int rowCount, int placeCount, User user) {
        this.rowCount = rowCount;
        this.placeCount = placeCount;
        this.user = user;
    }

    @Override
    public String toString() {
        return "cinemaHall_id=" + cinemaHall_id +
                ", rowCount=" + rowCount +
                ", placeCount=" + placeCount ;
    }

    //    public CinemaHall(HallType typeCinemaHall, int rowCount, int placeCount) {
//        this.typeCinemaHall = typeCinemaHall;
//        this.rowCount = rowCount;
//        this.placeCount = placeCount;
//    }
}
