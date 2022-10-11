package carrentalfinalprojectbackend.controller;

import carrentalfinalprojectbackend.model.Car;
import carrentalfinalprojectbackend.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;


    @GetMapping
    public List<Car> creatCar(){
       return carService.getAllCars();
    }

    @PostMapping()
    public void creatCar(@RequestBody Car car){
        carService.createCar(car);
    }

}
