package com.company.onlinestore.service;


import com.company.onlinestore.Repository.ProductRepository;
import com.company.onlinestore.Repository.UserRepository;
import com.company.onlinestore.entity.Product;
import com.company.onlinestore.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataServiceImpl implements DataService{

    @Autowired
    private ProductRepository productRepository;
    //private UserRepository userRepository;

    @Override
    public boolean populateData() {

        try{

            Product product1 = new Product();
            Product product2 = new Product();
            Product product3 = new Product();

            /*User user1 = new User();
            User user2 = new User();
            User user3 = new User();*/


            product1.setProductName("relogio");
            product1.setProductCategorie("acessorios");
            product1.setProductDescription("um belo relogio");
            product1.setProductPrice(15l);
            product1.setStatus("In stock");

            product2.setProductName("camisola manga curta");
            product2.setProductCategorie("camisola");
            product2.setProductDescription("uma bela camisola");
            product2.setProductPrice(20l);
            product2.setStatus("Out of stock");

            product3.setProductName("sapatilhas");
            product3.setProductCategorie("calçado");
            product3.setProductDescription("umas belas sapatilhas");
            product3.setProductPrice(40l);
            product3.setStatus("In stock");


          /*  user1.setUserName("pedro");
            user1.setUserAge(18);
            user1.setUserGender("male");
            user1.setUserAddress("lordelo");
            user1.setUserNIF(73878236);
            user1.setUserPhone(912439635);
            user1.setUserEmail("pedrobarbosa147@gmail.com");
            user1.setUserPwd("123pedro");
            user1.setUserRole("user");


            user2.setUserName("antonio");
            user2.setUserAge(32);
            user2.setUserGender("male");
            user2.setUserAddress("porto");
            user2.setUserNIF(132323323);
            user2.setUserPhone(31331213);
            user2.setUserEmail("antonio147@gmail.com");
            user2.setUserPwd("123antonio");
            user2.setUserRole("user");


            user3.setUserName("maria");
            user3.setUserAge(19);
            user3.setUserGender("female");
            user3.setUserAddress("lisboa");
            user3.setUserNIF(2342342);
            user3.setUserPhone(432414234);
            user3.setUserEmail("maria147@gmail.com");
            user3.setUserPwd("123maria");
            user3.setUserRole("user");*/


            product1=productRepository.save(product1);
            product2=productRepository.save(product2);
            product3=productRepository.save(product3);

           /*user1= userRepository.save(user1);
           user2= userRepository.save(user2);
           user3= userRepository.save(user3);*/



        } catch (Exception e){
            return false;
        }
        return true;
    }
}
