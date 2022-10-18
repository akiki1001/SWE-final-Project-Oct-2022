package carrentalfinalprojectbackend.controller;

import carrentalfinalprojectbackend.dto.CarDto;
import carrentalfinalprojectbackend.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;


    @GetMapping
    public Set<CarDto> creatCar(){
       return carService.getAllCars();
    }

    @PostMapping()
    public void creatCar(@RequestBody CarDto car){
        carService.createCar(car);
    }

}
