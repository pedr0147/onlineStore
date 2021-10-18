import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import {ProductService} from "./services/product/product.service";
import {MenuItem} from "primeng/api";
import {CartService} from "./services/cart/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
      trigger('rowExpansionTrigger', [
          state('void', style({
              transform: 'translateX(-10%)',
              opacity: 0
          })),
          state('active', style({
              transform: 'translateX(0)',
              opacity: 1
          })),
          transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
      ])
  ]
})
export class AppComponent implements OnInit{
    constructor(public productService: ProductService,
                public cartService: CartService) { }

    ngOnInit() {
      this.productService.getProducts().subscribe((value)=>{console.log(value)})

  }
}

