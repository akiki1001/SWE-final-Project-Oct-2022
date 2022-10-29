package com.edu.miu.backend.seed;

import com.edu.miu.backend.services.CarBrandService;
import com.edu.miu.backend.services.CarService;
import com.edu.miu.backend.dto.CarDTO;
import com.edu.miu.backend.model.CarBrand;
import com.edu.miu.backend.model.CarModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Component
@Transactional(propagation = Propagation.REQUIRED)
public class CarAndBrandData {
    private CarService carService;
    private final Random rand = new Random();
    private CarBrandService carBrandService;
    Stack<String> images = new Stack<>(){{
        add("https://images.pexels.com/photos/13158743/pexels-photo-13158743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        add("https://images.pexels.com/photos/12801137/pexels-photo-12801137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        add("https://images.pexels.com/photos/11654779/pexels-photo-11654779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        add("https://images.pexels.com/photos/12765641/pexels-photo-12765641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        add("https://images.pexels.com/photos/13184485/pexels-photo-13184485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        add("https://images.pexels.com/photos/11231424/pexels-photo-11231424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        add("https://images.pexels.com/photos/13158743/pexels-photo-13158743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        add("https://images.pexels.com/photos/13158743/pexels-photo-13158743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    }};

    @Autowired
    public void setCarService(CarService carService) {
        this.carService = carService;
    }

    @Autowired
    public void setCarBrandService(CarBrandService carBrandService) {
        this.carBrandService = carBrandService;
    }

    private void loadCarsAndCarBrands() {
        List<String> brands = new ArrayList<>(){{
            add("Toyota");
            add("Tesla");
            add("Toyota");
            add("Toyota");
            add("Toyota");
            add("Porsche");
        }};

        HashMap<String, String> cars = new HashMap<>(){{
            put("Toyota", "Cameo");
            put("Tesla", "XC 60");
            put("Toyota", "Mustang");
            put("Toyota", "Supra");
            put("Toyota", "Qashqai");
            put("Porsche", "Taycan");
        }};


        for (String brandName : brands) {
            CarBrand brand = new CarBrand();
            brand.setName(brandName);
            brand.setDescription(brandName + " Lorem ipsum is used plo tut.");
            brand = carBrandService.createBrand(brand);

            if (cars.containsKey(brandName)) {
                CarDTO car = new CarDTO();

                car.setImageCover(images.pop());
                car.setName(cars.get(brandName));
                car.setCarBrand(brand.getBrandId());
                car.setYear("200" + brandName.length());
                car.setRentalFee(brandName.length() * 20);
                car.setRegNo("XII ML" + brandName.length() + rand.nextInt(100));
                car.setModel(brandName.length() % 2 == 0 ? CarModel.SUV: CarModel.SEDAN);

                carService.createCar(car);
            }
        }
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        if (carBrandService.findAll().size() == 0) {
            loadCarsAndCarBrands();
        }
    }
}
