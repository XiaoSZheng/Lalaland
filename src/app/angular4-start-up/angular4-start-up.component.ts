import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-angular4-start-up',
  templateUrl: './angular4-start-up.component.html',
  styleUrls: ['./angular4-start-up.component.css']
})
export class Angular4StartUpComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  
  ngOnInit() {
  }

}
