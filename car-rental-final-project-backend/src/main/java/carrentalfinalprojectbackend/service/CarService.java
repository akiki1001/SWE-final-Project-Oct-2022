package carrentalfinalprojectbackend.service;

import carrentalfinalprojectbackend.dto.CarDto;

import java.util.List;
import java.util.Set;

public interface CarService {
    public void addCar(CarDto car);

    public Set<CarDto> getAllCars();

    public Set<CarDto> getCarByBrand(String brand);
    public Set<CarDto> getCarByModel(String model);
}
