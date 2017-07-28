import { Component, OnInit } from '@angular/core';
import { CustomerService } from "app/customer-detail/customer.service";
import { TranslateService } from "@ngx-translate/core";
import { Customer } from "app/objects/customer";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    hasCurrentUser:boolean = false;
    currentCustomer:Customer;

  constructor(private _customerService: CustomerService, private translate: TranslateService) {
    _customerService.currentCustomer.subscribe( (customer) => {
      this.currentCustomer = customer;
      this.hasCurrentUser = true;
    })
   }

  ngOnInit() {
    this.currentCustomer = this._customerService.getCurrentCustomer();
    if(this.currentCustomer == undefined){
       this.hasCurrentUser = false;
    }else{
      this.hasCurrentUser = true;
    }
  }
}
