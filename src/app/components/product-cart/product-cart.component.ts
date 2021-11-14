import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  //items = this.cartService.getItems();
  public items : any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService) { }
  removeItem(item: CartItem){
    // this.cartService.removeCartItem(item);
    // item = this.cartService.getItems();
    // window.location.reload;
    this.cartService.removeCartItem(item);
  }
  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.items = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.items);
    })
  }
  addQuantity(item: CartItem){
    item.quantity+=1;
   this.cartService.addtoCart(item.product,item.quantity);

  }
  subQuantity(item: CartItem){
    if(item.quantity === 1)
    {
      return;
    }
    else
      item.quantity-=1;
      this.cartService.addtoCart(item.product,item.quantity);
  }
  changeQuantity(item: CartItem){
    console.log(item);
    if(item.quantity === null)
    {
      return;
    }
    this.cartService.addtoCart(item.product,item.quantity);
    console.log()
  }
  clearCart(){
    this.cartService.removeAllCart();
  }

}
