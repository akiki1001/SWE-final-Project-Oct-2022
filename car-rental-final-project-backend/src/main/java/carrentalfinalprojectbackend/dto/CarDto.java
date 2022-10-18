package carrentalfinalprojectbackend.dto;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class CarDto {

    @Id
    @GeneratedValue
    private int id;

    private String model;
    private String plateNumber;
    private String brand;
    private String type;
    private boolean status;
}
