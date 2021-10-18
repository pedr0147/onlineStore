import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {OrderService} from "../../services/order/order.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 cartTotal=this.cartService.cartTotal;

  constructor(public cartService: CartService,
              private orderService: OrderService) { }

  ngOnInit(): void {
  }

  createOrder() {
    this.orderService.createOrder()
      .pipe(
        take(1)
      ).subscribe();
  }
}
