package com.company.onlinestore.controller;


import com.company.onlinestore.dto.OrderDTO;
import com.company.onlinestore.entity.Order;
import com.company.onlinestore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders/")
public class OrderController {


    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("create")
    public Order createOrder(@RequestBody OrderDTO orderDTO){

       return orderService.createOrder(orderDTO);


    }


    @GetMapping()
    public List<Order> fetchOrderList(){
        return orderService.fetchOrderList();

    }

    @GetMapping("{id}")
    public List<Order> fetchOrderByUserId(@PathVariable("id") Long id){
        return orderService.fetchOrderByUserId(id);
    }


}
