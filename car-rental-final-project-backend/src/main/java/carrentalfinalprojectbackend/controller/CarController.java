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
    public Set<CarDto> GetAllCars(){
       return carService.getAllCars();
    }

    @PostMapping()
    public void addCar(@RequestBody CarDto car){
        carService.addCar(car);
    }

    @GetMapping("/search/model/{model}")
    public Set<CarDto> getCarByModel(@PathVariable("model") String model){
        return carService.getCarByModel(model);
    }

    @GetMapping("/search/brand/{brand}")
    public Set<CarDto> getCarByBrand(@PathVariable("brand") String brand){
        return carService.getCarByBrand(brand);
    }


}
