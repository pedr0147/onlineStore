package com.company.onlinestore.controller.data;
import com.company.onlinestore.entity.Product;
import com.company.onlinestore.service.DataService;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@CrossOrigin(methods = {
        RequestMethod.POST
})


@RestController
@RequestMapping("/data/")
public class DataController {

    @Autowired
    private DataService dataService;
    //private final Logger LOGGER = LoggerFactory.getLogger(DataController.class);

    //---------------------------------------------------------------------

    //POST DOS PRODUTOS INICIAIS
    @GetMapping
    public boolean populateData(){
        //LOGGER.info("Inside products on database");
        return dataService.populateData();
    }
}
