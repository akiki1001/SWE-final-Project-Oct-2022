package carrentalfinalprojectbackend.service;

import carrentalfinalprojectbackend.dto.CarDto;

import java.util.Set;

public interface CarService {
    public void createCar(CarDto car);

    public Set<CarDto> getAllCars();
}
