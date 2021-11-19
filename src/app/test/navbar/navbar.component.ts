import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchTerm : string = '';
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  fillP(event: any){
    this.searchTerm = event;
    console.log(this.searchTerm);
    this.cartService.filterP.next(this.searchTerm);
  }

}
