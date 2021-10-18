package com.company.onlinestore.service;

import com.company.onlinestore.Repository.OrderRepository;
import com.company.onlinestore.Repository.UserRepository;
import com.company.onlinestore.dto.OrderDTO;
import com.company.onlinestore.entity.Order;
import com.company.onlinestore.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {


    private OrderRepository orderRepository;
    private UserRepository userRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }


    @Override
    public List<Order> fetchOrderList() {
        return orderRepository.findAll();
    }

    @Override
    public Order createOrder(OrderDTO orderDTO) {


        //TODO Ver se encontrou o user, ver se nao vem null ou vazio, ver se a lisa de produtos vem bem construida
        Order order = new Order();

        User user = userRepository.findUserById(orderDTO.getUserId());

        order.setUser(user);

        order.setProduct(orderDTO.getProductList());

        return orderRepository.save(order);

    }

    @Override
    public List<Order> fetchOrderByUserId(Long id) {
        return orderRepository.findOrderByUserId(id);
    }


}
