import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../services/order/order.service";

@Component({
  selector: 'app-finished-payment',
  templateUrl: './finished-payment.component.html',
  styleUrls: ['./finished-payment.component.scss']
})
export class FinishedPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
