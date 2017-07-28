import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createCustomer(){
    this.router.navigate(['/Dashboard/Profile']);
  }

}
