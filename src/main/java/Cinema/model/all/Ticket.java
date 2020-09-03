//package Cinema.model;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//
//@Entity
//public class Ticket {
//    @Id
//    @GeneratedValue(strategy=GenerationType.AUTO)
//    private Integer ticket_id;
//    private int row;
//    private int place;
//    private double cost;
//
//    public Ticket() {}
//
//    Ticket(int row, int place, float cost) {
//        this.row = row;
//        this.place = place;
//        this.cost = cost;
//    }
//
//    @Override
//    public String toString() {
//        return "\n Ticket " +
//                "row " + row +
//                ", place " + place +
//                ", cost " + cost +
//                " ";
//    }
//}
