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

  customers:any = [];
  customerForm: boolean = false;
  editCustomerForm: boolean = false;
  isNewForm: boolean;
  newCustomer: any = {};
  editedCustomer: any = {};
  viewData:number = 0;

  constructor(private _customerService: CustomerService, private router:Router) {
        _customerService.matchedNamesSubject.subscribe((customerList) => {
        console.log(customerList);
        this.customers = customerList;
    });
   }

  ngOnInit() {
  //this._customerService.getCustomersFromData();
  }

  searchForCustomer(){
    this._customerService.getCustomersFromData();
    this.viewData = 1;
  }

  showEditCustomerForm() {
    this.router.navigate(['/Dashboard/Profile']);
  }


  cancelNewCustomer() {
    this.newCustomer = {};
    this.customerForm = false;
  }

  cancelEdits() {
    this.editedCustomer = {};
    this.editCustomerForm = false;
  }

}