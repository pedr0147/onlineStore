import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users/users.service";
import {take} from "rxjs/operators";
import {pipe} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(0),
    gender: new FormControl(""),
    address: new FormControl(""),
    nif: new FormControl(0),
    phone: new FormControl(""),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  createUser() {

    this.usersService.createUsers(
      this.form.get('name')!.value,
      this.form.get('age')!.value,
      this.form.get('gender')?.value,
      this.form.get('address')?.value,
      this.form.get('nif')?.value,
      this.form.get('phone')?.value,
      this.form.get('username')?.value,
      this.form.get('password')?.value).pipe(
        take(1)
    ).subscribe(value => {})

  }

}
