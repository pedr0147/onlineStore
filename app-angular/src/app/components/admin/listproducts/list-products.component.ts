import { Component, OnInit } from '@angular/core';
import {APIProduct} from "../../../models/product";
import {take} from "rxjs/operators";
import {ProductService} from "../../../services/product/product.service";
import {CartService} from "../../../services/cart/cart.service";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: APIProduct[]= [];

  productsForm = new FormArray([]);

  constructor(private productService: ProductService,
              public cartService:CartService) { }

  ngOnInit(): void {
  this.getProducts();
  }

  remove(product:APIProduct):void{
    this.productService.deleteProduct(product.id).pipe(take(1),).subscribe(result => {
      if(result){
        this.getProducts();
      }
    })
  }

  private getProducts():void{
    this.productService.getProducts().pipe(
      take(1),
    ).subscribe((products: APIProduct[]) => {
      this.products = products;
      this.productsForm = new FormArray(
        this.products.map((prod: APIProduct)=>{
          return new FormGroup({
            id: new FormControl(prod.id, []),
            category: new FormControl(prod.productCategorie, []),
            name: new FormControl(prod.productName, []),
            description: new FormControl(prod.productDescription, []),
            price: new FormControl(prod.productPrice, []),
            status: new FormControl(prod.status, []),
          })
        })
      );
    });
  }

  updateProducts(formGroup: FormGroup){
    const product: APIProduct = {
      id: formGroup.get('id')!.value,
      productName: formGroup.get('name')!.value,
      productCategorie: formGroup.get('category')!.value,
      productDescription: formGroup.get('description')!.value,
      productPrice: formGroup.get('price')!.value,
      status: formGroup.get('status')!.value
    }
    this.productService.updateProduct(product).pipe(take(1),).subscribe(result => {
      if(result){
        this.getProducts();
      }
    })
  }
}
