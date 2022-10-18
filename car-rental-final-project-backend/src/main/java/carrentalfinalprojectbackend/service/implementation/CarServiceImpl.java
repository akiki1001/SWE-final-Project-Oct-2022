package carrentalfinalprojectbackend.service.implementation;

import carrentalfinalprojectbackend.dto.CarDto;
import carrentalfinalprojectbackend.model.Car;
import carrentalfinalprojectbackend.repository.CarRepo;
import carrentalfinalprojectbackend.service.CarService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements CarService {

    @Autowired
    ModelMapper modelMapper;
    private final CarRepo carRepo;
    @Override
    public void createCar(CarDto carDto) {
        Car car =modelMapper.map(carDto,Car.class);
        carRepo.save(car);
    }

    @Override
    public Set<CarDto> getAllCars() {

        List<Car> cars = carRepo.findAll();

        Set<CarDto> carDtos = cars.stream().map(x->modelMapper.map(x,CarDto.class)).collect(Collectors.toSet());
        return carDtos;
    }
}
