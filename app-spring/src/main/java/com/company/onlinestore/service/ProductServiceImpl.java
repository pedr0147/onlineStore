package com.company.onlinestore.service;

import com.company.onlinestore.Repository.ProductRepository;
import com.company.onlinestore.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {


    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> fetchProductList() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> fetchProductByCategorie(String productCategorie) {
       // Optional<Product> product= Optional.ofNullable(productRepository.findByProductCategorie(productCategorie));
        List<Product>products=productRepository.findAll().stream().filter(product -> {
            return product.getProductCategorie().equalsIgnoreCase(productCategorie);
        }).collect(Collectors.toList());
        return products;
    }

    @Override
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public Product updateProduct(Long id, Product product) {

        //---------variable proDB config

        Product proDB=productRepository.findById(id).get();

        //---------statements

        //Name
        if(Objects.nonNull(product.getProductName())&&!"".equalsIgnoreCase(product.getProductName())){
            proDB.setProductName((product.getProductName()));
        }

        //Price
        if(Objects.nonNull(product.getProductPrice())){
            proDB.setProductPrice((product.getProductPrice()));
        }

        //Description
        if(Objects.nonNull(product.getProductDescription())&&!"".equalsIgnoreCase(product.getProductDescription())){
            proDB.setProductDescription((product.getProductDescription()));
        }

        //Categorie
        if(Objects.nonNull(product.getProductCategorie())&&!"".equalsIgnoreCase(product.getProductCategorie())){
            proDB.setProductCategorie((product.getProductCategorie()));
        }

        //Status
        if(Objects.nonNull(product.getStatus())&&!"".equalsIgnoreCase(product.getStatus())){
            proDB.setStatus((product.getStatus()));
        }


        productRepository.save(proDB);

        return proDB;

    }
}
