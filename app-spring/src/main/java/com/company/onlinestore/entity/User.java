package com.company.onlinestore.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;


@NoArgsConstructor
@Setter
@Getter
@Entity


public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long userId;

    private String userName;
    private int userAge;
    private String userGender;
    private String userAddress;
    private int userNIF;
    private int userPhone;
    private String userEmail;
    private String userPwd;
    private String userRole;



    @Override
    public String toString(){
        return "User{" +
                "userId="+userId+
                ",userName="+userName+'\'' +
                ",userAge="+userAge+'\'' +
                ",userGender="+userGender+'\'' +
                ",userAddress="+userAddress+'\'' +
                ",userNIF="+userNIF+'\'' +
                ",userPhone="+userPhone+'\'' +
                ",userEmail="+userEmail+'\'' +
                ",userPwd="+userPwd+'\'' +
                ",userRole="+userRole+'\'' +
                '}';
    }

}
