import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { clone } from 'lodash';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customers: Customer[];
  customerForm: boolean = false;
  editCustomerForm: boolean = false;
  isNewForm: boolean;
  newCustomer: any = {};
  editedCustomer: any = {};
  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customers = this._customerService.getCustomersFromData();
  }

  showEditCustomerForm(customer: Customer) {
    if (!customer) {
      this.customerForm = false;
      return;
    }
    this.editCustomerForm = true;
    this.editedCustomer = clone(customer);
  }

  showAddCustomerForm() {
    if (this.customers.length) {
      this.newCustomer = {};
    }
    this.customerForm = true;
    this.isNewForm = true;
  }

  saveCustomer(customer: Customer) {
    if (this.isNewForm) {
      this._customerService.addCustomer(customer);
    }
    this.customerForm = false;
  }

  removeCustomer(customer: Customer) {
    this._customerService.deleteCustomer(customer);
  }

  updateCustomer() {
    this._customerService.updateCustomer(this.editedCustomer);
    this.editCustomerForm = false;
    this.editedCustomer = {};
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