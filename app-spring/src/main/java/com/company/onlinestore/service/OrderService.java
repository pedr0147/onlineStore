package com.company.onlinestore.service;

import com.company.onlinestore.dto.OrderDTO;
import com.company.onlinestore.entity.Order;

import java.util.List;

public interface OrderService {
    public List<Order> fetchOrderList();

    public Order createOrder(OrderDTO orderDTO);

    List<Order> fetchOrderByUserId(Long id);
}
