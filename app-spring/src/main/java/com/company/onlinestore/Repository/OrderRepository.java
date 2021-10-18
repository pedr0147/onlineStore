package com.company.onlinestore.Repository;

import com.company.onlinestore.entity.Order;
import com.company.onlinestore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query(value = "SELECT * FROM ORDERS u WHERE u.USER_ID = ?", nativeQuery = true)
    List<Order> findOrderByUserId (Long userId);

}
