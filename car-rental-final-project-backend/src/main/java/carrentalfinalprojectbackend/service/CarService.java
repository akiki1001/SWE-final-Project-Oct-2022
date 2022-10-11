package carrentalfinalprojectbackend.service;

import carrentalfinalprojectbackend.model.Car;

import java.util.List;

public interface CarService {
    public void createCar(Car car);

    public List<Car> getAllCars();
}
