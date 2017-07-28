import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from "@ngx-translate/core";
import { CustomerService } from "app/customer-detail/customer.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  constructor(private translate: TranslateService, private _customerService: CustomerService) {
        if(this._customerService.languageCount == 0){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    }
   }

  ngOnInit() {
  }

  cycleLanguages(){
   if(this._customerService.languageCount == this._customerService.languges.length){
     this._customerService.languageCount = 0;
   }
   this.translate.use(this._customerService.languges[this._customerService.languageCount]);
  this._customerService.languageCount++;
  }
  
}
