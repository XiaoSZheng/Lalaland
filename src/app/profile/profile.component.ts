import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-detail/customer.service';
import { Customer } from '../objects/customer';
import { Router } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private customers;
  public currentCustomer: Customer;
  canEdit:boolean = false;

  constructor(private _customerService: CustomerService, private router: Router, private modalService: NgbModal) {
    _customerService.matchedNamesSubject.subscribe((customerList) => {
      this.customers = customerList;
    });

    _customerService.currentCustomer.subscribe((customer) => {
      this.currentCustomer = customer;
    });
  }

  ngOnInit() {
    this.currentCustomer = this._customerService.getCurrentCustomer();
    if(this.currentCustomer == undefined){
      this.router.navigate(['/Dashboard/Customer_Detail']);
    }
  }

  editMode(){
    this.canEdit = ! this.canEdit;
  }

  doneEdit(){
    this.router.navigate(['/Dashboard/Customer_Detail']);
  }

    open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg'});
  }

}
