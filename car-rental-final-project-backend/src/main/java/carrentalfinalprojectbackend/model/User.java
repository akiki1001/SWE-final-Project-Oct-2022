package carrentalfinalprojectbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private int id;

    private String firstName;
    private String lastName;
//    private String gmail;
//    private String password;
    private String licenseNumber;
    private int phoneNumber;
    private int age;

    @ManyToMany
    List<Role> roles;

    @OneToOne
    private Address address;

    @OneToMany(mappedBy = "user")
    private List<Reservation> reservations;
}
