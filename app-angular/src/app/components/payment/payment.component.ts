import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 cartTotal=this.cartService.cartTotal;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
