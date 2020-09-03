//package Cinema.model;
//
//import javax.persistence.*;
//import java.time.LocalDate;
//import java.time.LocalTime;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//public class Seance {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer seance_id;
//
//    private Movie movie;
//
//    private CinemaHall cinemaHall;
//    private LocalDate date;
//    private LocalTime time;
//
////    @OneToMany(mappedBy = "ticket_id", fetch = FetchType.EAGER)
//    private List<Ticket> tickets;
//
//    public Seance() {
//    }
//
//    public Seance(Movie movie, CinemaHall cinemaHall, LocalDate date, LocalTime time) {
//        this.movie = movie;
//        this.cinemaHall = cinemaHall;
//        this.date = date;
//        this.time = time;
//        this.tickets = new ArrayList<>();
//        for (int i = 0; i < cinemaHall.getRowCount(); i++) {
//            for (int j = 0; j < cinemaHall.getPlaceCount(); j++) {
//                this.tickets.add(new Ticket(i+1,j+1, 500));
//            }
//        }
//    }
//
//    public Integer getSeance_id() {
//        return seance_id;
//    }
//
//    public void setSeance_id(Integer seance_id) {
//        this.seance_id = seance_id;
//    }
//
//    public Movie getMovie() {
//        return movie;
//    }
//
//    public void setMovie(Movie movie) {
//        this.movie = movie;
//    }
//
//    public CinemaHall getCinemaHall() {
//        return cinemaHall;
//    }
//
//    public void setCinemaHall(CinemaHall cinemaHall) {
//        this.cinemaHall = cinemaHall;
//    }
//
//    public LocalDate getDate() {
//        return date;
//    }
//
//    public void setDate(LocalDate date) {
//        this.date = date;
//    }
//
//    public LocalTime getTime() {
//        return time;
//    }
//
//    public void setTime(LocalTime time) {
//        this.time = time;
//    }
//
//    public List<Ticket> getTickets() {
//        return tickets;
//    }
//
//    public void setTickets(List<Ticket> tickets) {
//        this.tickets = tickets;
//    }
//
//    @Override
//    public String toString() {
//        return "Seance " + seance_id + " " +
//                ", movie=" + movie +
//                ", cinemaHall=" + cinemaHall +
//                ", date=" + date +
//                ", time=" + time +
//                ", tickets=" + tickets +
//                '}';
//    }
//}
