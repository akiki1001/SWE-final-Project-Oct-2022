package carrentalfinalprojectbackend.service;

import carrentalfinalprojectbackend.model.User;

import java.util.List;

public interface UserService {
    public void createUser(User user);
    public List<User> getAllUsers();


}
