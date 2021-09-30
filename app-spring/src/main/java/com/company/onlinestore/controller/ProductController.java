package com.company.onlinestore.controller;

import com.company.onlinestore.entity.Product;
import com.company.onlinestore.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;



@CrossOrigin( methods = {
        RequestMethod.DELETE,
        RequestMethod.GET,
        RequestMethod.POST,
        RequestMethod.PUT
})


@RestController
@RequestMapping("/products/")
public class ProductController {

    @Autowired
    private ProductService productService;
    private final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);
    //------------------------------------------------------------

    //CRIAÇÃO DOS PRODUTOS
    //WORKING

    @PostMapping
    public Product saveProduct(@Valid @RequestBody Product product) {
        LOGGER.info("Inside saveProduct of ProductController");

        return productService.saveProduct(product);
    }

    //------------------------------------------------------------

    //LISTAGEM DE TODOS OS PRODUTOS
    //WORKING

    @GetMapping
            //("{id}")
    public List<Product> fetchProductList(){
        LOGGER.info("Inside fetchProductList of ProductController");

        return productService.fetchProductList();
    }

    //------------------------------------------------------------

    //APAGAR PRODUTOS
    //NOT WORKING

    @DeleteMapping("{id}")
    public boolean deleteProductById(@PathVariable("id") Long id){
        productService.deleteProductById(id);

        return true;
    }

    //------------------------------------------------------------

    //FAZER UPDATE DE PRODUTOS
    //WORKING

    @PutMapping("{id}")
    public Product updateProduct(@PathVariable("id") Long id,
                                 @RequestBody Product product){

        return productService.updateProduct(id,product);
    }

    //------------------------------------------------------------

    //FILTRAR PRODUTOS PELA CATEGORIA
    //WORKING

    @GetMapping("categorie/{categorie}")
    public List<Product> fetchProductByCategorie(@PathVariable("categorie") String productCategorie){

        return productService.fetchProductByCategorie(productCategorie);
    }


}
