import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-detail/customer.service';
import { Customer } from '../objects/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private customers;
  public currentCustomer: Customer = new Customer();

  constructor(private _customerService: CustomerService) {
    _customerService.matchedNamesSubject.subscribe((customerList) => {
      console.log(customerList);
      this.customers = customerList;
    });

    _customerService.currentCustomer.subscribe((customer) => {
      this.currentCustomer = customer;
      console.log(this.currentCustomer);
    });
  }

  ngOnInit() {
  }

}
