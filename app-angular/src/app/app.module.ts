import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import { CartComponent } from './components/cart/cart.component';
import { ListUsersComponent } from './components/admin/listusers/list-users.component';
import { ListProductsComponent } from './components/admin/listproducts/list-products.component';
import { PaymentComponent } from './components/payment/payment.component';
import {TreeTableModule} from "primeng/treetable";
import {SplitterModule} from 'primeng/splitter';
import { RegisterComponent } from './components/register/register.component';
import { FinishedPaymentComponent } from './components/payment/finished-payment/finished-payment.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    CartComponent,
    ListUsersComponent,
    ListProductsComponent,
    PaymentComponent,
    RegisterComponent,
    FinishedPaymentComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BadgeModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    SplitterModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'listusers',
        component: ListUsersComponent
      },
      {
        path: 'listproducts',
        component: ListProductsComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'finishedpayment',
        component: FinishedPaymentComponent
      }
    ]),
    MenubarModule,
    TableModule,
    RatingModule,
    TreeTableModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

