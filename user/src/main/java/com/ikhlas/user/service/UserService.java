package com.ikhlas.user.service;

import com.ikhlas.user.model.Nationality;
import com.ikhlas.user.model.UserDetails;
import com.ikhlas.user.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;
    private final BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);

    public void userExists(int Id){
        UserDetails existingUser=repo.findById(Id).orElseThrow(()->new RuntimeException("User not found"));
    }

    public void saveUser(UserDetails user){
        if(user.getPassword()==null || user.getPassword().isBlank()){
            throw new RuntimeException("Password is missing");
        }
        user.setPassword(encoder.encode(user.getPassword()));
        repo.save(user);
    }
    public List<UserDetails> getUsers(){
        return repo.findAll();
    }

    public UserDetails getUser(Integer id){
        userExists(id);
        return repo.findById(id).orElse(new UserDetails());
    }

    public void updateUser(int Id, UserDetails user) {
        userExists(Id);
        user.setId(Id);
        repo.save(user);
    }

    public void deleteUser(Integer id) {
        userExists(id);
        repo.deleteById(id);
    }
}
