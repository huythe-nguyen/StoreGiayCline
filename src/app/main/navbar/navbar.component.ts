import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public status : string = '';
  public gender : string = '';
  public selling : string = '';
  public brand : string = '';
  cart:  CartItem[] = [];
  totalItem: number = 0;

  constructor(private route: ActivatedRoute,
    private _router: Router,
    private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe((res: any)=>{
      this.cart = res;
      if(this.cart !== null) {
      this.totalItem = this.cart.length;}
    })
  }
  navigateToFoo(filter: string){
    if(filter === 'new' || filter === 'seconhand'){
      this.status =  filter;
      this.gender = '';
      this.selling = '';
      this.brand='';
    }else if(filter === 'nam' || filter === 'nu'){
      this.gender = filter;
      this.status = '';
      this.selling = '';
      this.brand='';
    }else if(filter === 'Adidas'|| filter === 'Nike'|| filter === 'Puma'|| filter === 'Converse'|| filter === 'Other'){
      this.brand=filter;
      this.gender = '';
      this.status = '';
      this.selling = '';
    }else{
      this.selling = filter;
      this.gender = '';
      this.status = '';
      this.brand='';
    }

    this._router.navigate(['/homes'], {
     relativeTo: this.route,
     queryParams: {
      brand: this.brand,
       status : this.status,
       gender : this.gender,
       selling: this.selling

     },
     queryParamsHandling: 'merge',
     skipLocationChange: false
   });
  }
}
