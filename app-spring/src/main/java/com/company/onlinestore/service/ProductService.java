package com.company.onlinestore.service;
import com.company.onlinestore.entity.Product;

import java.util.List;

public interface ProductService {
    public Product saveProduct(Product product);
    public List<Product> fetchProductList();
    public List<Product> fetchProductByCategorie(String productCategorie);
    public void deleteProductById(Long id);
    public Product updateProduct (Long productId, Product product);
}
