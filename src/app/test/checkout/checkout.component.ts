import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public items : any = [];
  public grandTotal !: number;
  core=30000
  public Total !: number;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.items = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.Total = this.cartService.getTotalPrice()+this.core;
      console.log(this.items);
      console.log(this.grandTotal);
    })
  }

}
