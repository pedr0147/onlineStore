package com.company.onlinestore.controller;


import com.company.onlinestore.entity.User;
import com.company.onlinestore.models.BasicUser;
import com.company.onlinestore.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin( methods = {
        RequestMethod.DELETE,
        RequestMethod.GET,
        RequestMethod.POST,
        RequestMethod.PUT
})

@RestController
@RequestMapping("/users/")
public class UserController {

    @Autowired
    private UserService userService;
    private final Logger LOGGER= LoggerFactory.getLogger(UserController.class);

    //------------------------------------------------------------
    //CRIAR USERS
    @PostMapping
    public User saveUser(@Valid @RequestBody User user){
        LOGGER.info("Inside saveUser of UserController");
        System.out.println(user.toString());
        return userService.saveUser(user);
    }

    //------------------------------------------------------------
    //LISTAR PELO ID USERS
    @GetMapping("{id}")
    public Optional<User> fetchUserList(@PathVariable("id") Long userId){
        LOGGER.info("Inside fetchUserList of UserController");

        return userService.fetchUserList(userId);
    }

    //------------------------------------------------------------
    //VALIDAR SE EXISTE
    @PostMapping("exists")
    public User validUser(@RequestBody BasicUser user){
        LOGGER.info("Checking if user exists");

        return userService.userExists(user.username, user.password);
    }

    //------------------------------------------------------------
    //LISTAR TODOS USERS
    @GetMapping
    public List<User> fetchAllUserList(){
        LOGGER.info("Inside fetchUserList of UserController");

        return userService.fetchAllUserList();
    }


    //------------------------------------------------------------
    //UPDATE USERS
    @PutMapping("{id}")
    public Long updateUser(@PathVariable("id") Long userId,
                           @RequestBody User user){

        return userService.updateUser(userId, user);
    }

}
