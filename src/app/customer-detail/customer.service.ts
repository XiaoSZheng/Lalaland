import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './customer-data';
import { findIndex } from 'lodash';

@Injectable()
export class CustomerService {

  private currentCust = CUSTOMERS;

  getCustomersFromData(): Customer[] {
    console.log(this.currentCust);
    return this.currentCust
  }

  addCustomer(customer: Customer) {
    this.currentCust.push(customer);
    console.log(this.currentCust);
  }

  updateCustomer(customer: Customer) {
    let index = findIndex(this.currentCust, (cc: Customer) => {
      return cc.customerNumber === customer.customerNumber;
    });
    this.currentCust[index] = customer;
  }

  deleteCustomer(customer: Customer) {
    this.currentCust.splice(this.currentCust.indexOf(customer), 1);
    console.log(this.currentCust);
  }

}
