//package Cinema.model;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import java.util.Arrays;
//import java.util.List;
//
//@Entity
//public class Movie {
//    @Id
//    @GeneratedValue(strategy= GenerationType.AUTO)
//    private Integer movie_id;
//
//    private String name;
//    private List<MovieType> movieType;
//    private long duration;
//    private String description;
//
//    public Movie() {}
//
//    public Movie(String name, long duration, String description, MovieType ...movieTypes) {
//        this.name = name;
//        this.movieType = Arrays.asList(movieTypes);
//        this.duration = duration;
//        this.description = description;
//    }
//
//    @Override
//    public String toString() {
//        return "Movie{" +
//                "name='" + name + '\'' +
//                ", movieType=" + movieType +
//                ", duration=" + duration +
//                ", description='" + description + '\'' +
//                '}';
//    }
//}
