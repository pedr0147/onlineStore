import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UsersService} from "../../services/users/users.service";
import {OrderService} from "../../services/order/order.service";
import {take} from "rxjs/operators";
import {APIOrder} from "../../models/order";
import {Dialog} from "primeng/dialog";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: APIOrder[]=[];



  constructor(private usersService:UsersService,
              private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().pipe(
      take(1),
    ).subscribe((order:APIOrder[])=>{

      this.orders=order;

      //para ir buscar os products para o modal
      //this.orders[0].product

    });

  }
 displayModal: boolean | undefined;

  details(){
    this.displayModal=true;
    this.orderService.getOrders().pipe(
      take(1),
      ).subscribe((products:APIOrder[])=>{
        this.orders=products
    });
  }

}

