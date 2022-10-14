package carrentalfinalprojectbackend.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
    private boolean status;

}
