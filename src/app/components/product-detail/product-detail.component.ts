import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  images: any = [];
  id: any;
  quantity: number;
  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }
  addtocart(item: Product, quantity: number){
    if(quantity === null){
      quantity = 1;
    }
    this.cartService.addfromDetail(item,quantity);
    window.alert('Your product has been added to the cart!');
  }
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    this.id = route.snapshot.params['ID_Product'];
  }
  Pro: any = [];
  ngOnInit() {
    this.productService.getProById(this.id).subscribe(data =>{
      this.Pro = data as Array<Product>;
      this.product = this.Pro[0];
      // this.product = data as Product;
    });
    this.quantity = 1;
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = String(routeParams.get('ID_Product'));

    // this.product = product.find(product => product.ID_Product === productIdFromRoute);
  }

}
