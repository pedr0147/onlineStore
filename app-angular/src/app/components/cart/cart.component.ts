import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {APIProduct} from "../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  public remove(product:APIProduct){
   this.cartService.removeProduct(product);
  }

}
