package com.company.onlinestore.service;


import com.company.onlinestore.entity.Product;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

public interface DataService {

    boolean populateData();
}
