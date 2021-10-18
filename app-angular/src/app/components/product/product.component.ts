import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {APIProduct} from "../../models/product";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: APIProduct[]= [];

  constructor(private productService: ProductService,
              private router: Router,
              public cartService: CartService) {
  }


  ngOnInit() {
    this.productService.getProducts().pipe(
      take(1),
    ).subscribe((products: APIProduct[]) => {
      this.products = products;
      console.log(this.products);
    });

  }

  buy(product:APIProduct){
    this.cartService.addProduct(product);
  }

}
