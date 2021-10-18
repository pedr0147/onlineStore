import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UsersService} from "../../services/users/users.service";
import {take} from "rxjs/operators";
import {APIUser} from "../../models/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])

  })

  constructor( private usersService: UsersService,
               private router: Router) {}

  ngOnInit(): void {
  }

  loginUser() {

    if (this.form.invalid) {

      console.error("form is invalid", this.form)

    } else {

      this.usersService
        .authenticate(this.form.get('username')?.value, this.form.get('password')?.value)
        .pipe(
          take(1)
        )
        .subscribe((user: APIUser)=>{
          if(user){
            this.router.navigate(['/product']);
            return;
          }
          console.error('user not found');
      })
    }
    if((this.form.get('username')?.value == "admin")&&(this.form.get('password')?.value == "123")){
      this.router.navigate(['/admin']);
      return;
    }
  }

}
