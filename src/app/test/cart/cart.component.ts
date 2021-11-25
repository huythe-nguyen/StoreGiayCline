import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items :  CartItem[] = [];
  public grandTotal !: number;

  constructor(private cartService: CartService) { }

  removeItem(item: CartItem){
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
    if(item.quantity === null)
    {
      return;
    }
    item.quantity+=1;
   this.cartService.addtoCart(item.product,item.quantity);

  }
  subQuantity(item: CartItem){
    if(item.quantity === 1 || item.quantity === null || item.quantity <= 0)
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
      item.quantity = 1;
      return;
    }
    this.cartService.addtoCart(item.product,item.quantity);
    console.log()
  }
  clearCart(){
    this.cartService.removeAllCart();
  }

}
