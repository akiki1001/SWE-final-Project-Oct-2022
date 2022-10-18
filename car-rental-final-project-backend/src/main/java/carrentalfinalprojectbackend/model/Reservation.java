package carrentalfinalprojectbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue
    private int id;

    private LocalDate reservationDate;
    private LocalDate dueDate;

    @ManyToOne
    private User user;

    @OneToOne
    private Payment payment;

    @OneToMany(mappedBy = "reservation")
    private List<Car> cars;

}
