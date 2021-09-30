import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {APIUser} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:APIUser[]=[];

  constructor(private http: HttpClient) { }

  public authenticate(username:string, password:string):Observable<boolean>{
    const body = {
      username,
      password
    }
    return this.http.post<boolean>("http://localhost:8080/users/exists", body);
  }

  public getUsers(): Observable<APIUser[]> {
    return this.http.get<APIUser[]>("http://localhost:8080/users/");

  }


  public createUsers(name:string, age:number, gender:string, address:string, nif:number, phone:number, username:string, password: string):Observable<APIUser[]>{
    const create ={
      userName : name,
      userAge: age,
      userGender:gender,
      userAddress: address,
      userNIF:nif,
      userPhone:phone,
      userEmail: username,
      userPwd:password
    }

    return this.http.post<APIUser[]>("http://localhost:8080/users/",create);
  }


}
