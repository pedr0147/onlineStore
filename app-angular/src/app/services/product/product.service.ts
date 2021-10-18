import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { APIProduct } from "../../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(

    private http: HttpClient

  ) { }
  public getProducts(): Observable<APIProduct[]> {
    return this.http.get<APIProduct[]>("http://localhost:8080/products/");

  }

  public deleteProduct(productReference: number): Observable<boolean>{
    return this.http.delete<boolean>(`http://localhost:8080/products/${productReference}`);
  }

  public buyFunction() {
    return this.getProducts();
  }

  public updateProduct(product: APIProduct):Observable<boolean>{
    return this.http.put<boolean>(`http://localhost:8080/products/${product.id}`, product);
  }
}
