package com.company.onlinestore.service;


import com.company.onlinestore.Repository.UserRepository;
import com.company.onlinestore.entity.User;
import com.company.onlinestore.models.BasicUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> fetchUserList(Long userId) {
        return userRepository.findById(userId);
    }

    @Override
    public Long updateUser(Long userId, User user) {

        // userDB config----------------------------------------

        User userDB = userRepository.findById(userId).get();

        //statements---------------------------------

        //age----------------------------------------
        if(Objects.nonNull(user.getUserAge())){

            userDB.setUserAge(user.getUserAge());
        }

        //email----------------------------------------
        if(Objects.nonNull(user.getUserEmail())&&
                !"".equalsIgnoreCase(user.getUserEmail())){

            userDB.setUserEmail(user.getUserEmail());
        }

        //address----------------------------------------
        if(Objects.nonNull(user.getUserAddress())&&
                !"".equalsIgnoreCase(user.getUserAddress())){

            userDB.setUserAddress(user.getUserAddress());
        }

        //gender----------------------------------------
        if(Objects.nonNull(user.getUserGender())&&
                !"".equalsIgnoreCase(user.getUserGender())){

            userDB.setUserGender(user.getUserGender());
        }

        //email----------------------------------------
        if(Objects.nonNull(user.getUserEmail())&&
                !"".equalsIgnoreCase(user.getUserEmail())){

            userDB.setUserEmail(user.getUserEmail());
        }

        //name----------------------------------------
        if(Objects.nonNull(user.getUserName())&&
                !"".equalsIgnoreCase(user.getUserName())){

            userDB.setUserName(user.getUserName());
        }

        //NIF----------------------------------------
        if(Objects.nonNull(user.getUserNIF())){

            userDB.setUserNIF(user.getUserNIF());
        }

        //phone----------------------------------------
        if(Objects.nonNull(user.getUserPhone())){

            userDB.setUserPhone(user.getUserPhone());
        }

        //password----------------------------------------
        if(Objects.nonNull(user.getUserPwd())&&
                !"".equalsIgnoreCase(user.getUserPwd())){

            userDB.setUserEmail(user.getUserPwd());
        }
        userRepository.save(userDB);
        return userId;
    }

    @Override
    public List<User> fetchAllUserList() {
        return userRepository.findAll();
    }


    @Override
    public User userExists(String username, String password){
        return userRepository
                .findAll()
                .stream()
                .filter(user -> {
                    return user.getUserEmail()!=null && user.getUserEmail().equals(username.trim())&& user.getUserPwd().equals(password.trim()) ;
                }).collect(Collectors.toList()).get(0);
    }
}
