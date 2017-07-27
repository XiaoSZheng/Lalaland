import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../objects/customer';
import { clone } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customers: any[] = [];
  customerForm: boolean = false;
  editCustomerForm: boolean = false;
  isNewForm: boolean;
  newCustomer: any = {};
  editedCustomer: any = {};
  viewData: number = 0;
  accountNumber: number;
  accountName: string;

  constructor(private _customerService: CustomerService, private router: Router) {
    _customerService.matchedNamesSubject.subscribe((customerList) => {
      console.log(customerList);
      this.customers = customerList;
    });
  }

  ngOnInit() {
  }

  searchForCustomer() {
    this._customerService.getCustomersFromData();
    this.viewData = 1;
  }

  showEditCustomerForm() {
    this.router.navigate(['/Dashboard/Profile']);
  }

  findByAccount() {
    if (!this.accountNumber) {
      console.log("rest");
      this._customerService.getCustomersFromData();
    } else {
      this.customers = this.customers.filter((cust) => {
        if (cust.account.indexOf(this.accountNumber) != -1) {
          return cust;
        }
      })
    }
  }

  findByName(){
    if (!this.accountName) {
      console.log("rest");
      this._customerService.getCustomersFromData();
    } else {
      this.customers = this.customers.filter((cust) => {
        if (cust.name.indexOf(this.accountName) != -1) {
          return cust;
        }
      })
    }
  }

  goToProfile(cust){
    console.log("Customer Detail; " + cust);
    this._customerService.setCurrentCustomer(cust);
    this.router.navigate(['/Dashboard/Profile']);
  }

}