package com.company.onlinestore.dto;

import com.company.onlinestore.entity.Product;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private Long userId;

    private List<Product> productList;


}
