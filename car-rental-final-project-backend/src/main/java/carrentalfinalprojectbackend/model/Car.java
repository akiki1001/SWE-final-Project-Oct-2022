package carrentalfinalprojectbackend.model;

import carrentalfinalprojectbackend.converter.SetStringConverter;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class Car {

    @Id
    @GeneratedValue
    private int id;

    private String model;
    private String plateNumber;
    private String brand;
    private String type;
    private String color;
    private boolean status;
    @Convert(converter = SetStringConverter.class)
    @Column(length = 5000)
    private Set<String> pictures;

    @ManyToOne
    private Reservation reservation;

}
