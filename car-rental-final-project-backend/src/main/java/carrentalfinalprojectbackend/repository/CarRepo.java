package carrentalfinalprojectbackend.repository;

import carrentalfinalprojectbackend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepo extends JpaRepository<Car,Integer> {

    List<Car> findCarsByBrand(String brand);
    List<Car> findCarsByModel(String model);


}
