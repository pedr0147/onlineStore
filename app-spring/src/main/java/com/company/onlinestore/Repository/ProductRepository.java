package com.company.onlinestore.Repository;

import com.company.onlinestore.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    //public Product findByProductName(String productName);
   public Product findByProductCategorie(String productCategorie);
   // public Product deleteProductById(Long id);
}
