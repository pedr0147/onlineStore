package com.company.onlinestore.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "Products")
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(name = "Name")
    private String productName;

    @Column(name = "Category")
    private String productCategorie;

    @Column(name = "Description")
    private String productDescription;

    @Column(name = "Price")
    private Long productPrice;

    @Column(name = "Status")
    private String status;

  //  @ManyToMany(mappedBy = "product")
    //private List<Order> order;


    //------------------------------------------------------

    @Override
    public String toString() {
        return "Product{"+
                "productId=" +id +
                ", productName='"+productName+'\''+
                ", productCategorie='"+productCategorie+'\''+
                ", productDescription='"+productDescription+'\''+
                ", productPrice='"+productPrice+'\''+
                ", status='"+status+'\''+
                '}';
    }

}
