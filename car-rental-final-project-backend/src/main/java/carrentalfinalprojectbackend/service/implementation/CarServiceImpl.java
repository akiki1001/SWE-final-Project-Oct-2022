package carrentalfinalprojectbackend.service.implementation;

import carrentalfinalprojectbackend.model.Car;
import carrentalfinalprojectbackend.repository.CarRepo;
import carrentalfinalprojectbackend.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements CarService {

    private final CarRepo carRepo;
    @Override
    public void createCar(Car car) {
        carRepo.save(car);
    }

    @Override
    public List<Car> getAllCars() {
       return carRepo.findAll();
    }
}
