import {Injectable} from '@angular/core';
import {APIProduct} from "../../models/product";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public products: BehaviorSubject<APIProduct[]> = new BehaviorSubject<APIProduct[]>([]);
  public cartTotal = 0;


  constructor() { }


  public addProduct(product: APIProduct):void{
    this.products.value.push(product);
    this.calculateCartTotal();
  }

  public removeProduct(product: APIProduct):void{
    this.products.next(this.products.value.filter(e => e.id!==product.id));
    this.calculateCartTotal();
  }

  public calculateCartTotal():void{
     this.cartTotal=this.products.value.reduce((previousValue,currentValue)=>previousValue+Number(currentValue.productPrice), 0)
  }
}
