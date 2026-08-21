package com.ikhlas.user.controller;


import com.ikhlas.user.model.UserDetails;
import com.ikhlas.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("users/create")
    public ResponseEntity<String> createUser(@RequestBody UserDetails user){
          service.saveUser(user);
          return ResponseEntity.ok("User created Successfully");
    }

    @GetMapping("/users")
    public List<UserDetails>  getUsers(){
        return service.getUsers();
    }

    @GetMapping("/user/{id}")
    public UserDetails getUser(@PathVariable int id){
        try{
            return service.getUser(id);
        } catch (Exception e) {
            return  null;
        }
    }


    @PutMapping("/user/{id}")
    public ResponseEntity<String> updateUser(@PathVariable int id,@RequestBody UserDetails user){
          try{
              service.updateUser(id,user);
              return ResponseEntity.ok("User updated successfully");
          }
          catch(Exception e){
              return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with this id not found");
        }
    }

    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable int id){
        service.deleteUser(id);
    }
}
