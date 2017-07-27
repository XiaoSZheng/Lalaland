import { Injectable, OnInit } from '@angular/core';
import { Customer } from '../objects/customer';
import { findIndex } from 'lodash';
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService{

  public currentCustomer = new Subject<any>();
  private currentCustSingle: Customer;
  private currentCust: Customer[];
  public matchedNamesSubject = new Subject<any>();

  constructor(private http:Http){ }

  getCustomersFromData() {
      this.http.get("../assets/customers.json")
      .toPromise()
      .then(response => {
        this.currentCust = response.json();
        this.matchedNamesSubject.next(this.currentCust);
        });
      }; 

  setCurrentCustomer(customer){
    this.currentCustSingle = customer;
    this.currentCustomer.next(this.currentCustSingle);
  }
}
