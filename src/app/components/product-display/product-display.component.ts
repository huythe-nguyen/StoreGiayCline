import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProductDisplayComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content:any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }
  @Input() product: any;
  displayModal: boolean;
  showModalDialog() {
    this.displayModal = true;
}


}


