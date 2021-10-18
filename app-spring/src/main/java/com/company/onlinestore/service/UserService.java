package com.company.onlinestore.service;
import com.company.onlinestore.entity.User;
import com.company.onlinestore.models.BasicUser;


import java.util.List;
import java.util.Optional;


public interface UserService {
    public User saveUser(User user);
    public Optional<User> fetchUserList(Long userId);
    public Long updateUser(Long userId, User user);
    public User userExists(String username, String password);
    public List<User> fetchAllUserList();
}
