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

   constructor(private _customerService: CustomerService) {
        _customerService.matchedNamesSubject.subscribe((customerList) => {
        console.log(customerList);
        this.customers = customerList;
    });
   }

  ngOnInit() {
  }

}
