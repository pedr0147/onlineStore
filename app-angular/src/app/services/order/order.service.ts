import { Injectable } from '@angular/core';
import {UsersService} from "../users/users.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {APIOrder, APIProduct} from "../../models/order";
import {APIUser} from "../../models/user";
import {CartService} from "../cart/cart.service";
import {CartComponent} from "../../components/cart/cart.component";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private usersService:UsersService,
              private http: HttpClient,
              private cartService:CartService) { }

  public getOrders(): Observable<APIOrder[]>{
    return this.http.get<APIOrder[]>("http://localhost:8080/orders/"+this.usersService.user?.userId);
  }

  public createOrder():Observable<APIOrder[]>{
    const create ={
      userId: this.usersService.user?.userId,
      productList: this.cartService.products.value
    }

    return this.http.post<APIOrder[]>("http://localhost:8080/orders/create", create);
  }


}
