import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-detail/customer.service';
import { Customer } from '../customer-detail/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
  }

  customers = this._customerService.getCustomersFromData();

  customerNbr = this.customers[1].customerNumber;
  customerFN = this.customers[1].firstN;
  customerLN = this.customers[1].lastN;
}
