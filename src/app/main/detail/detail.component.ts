import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/service/data.service';
import { RestApiService } from 'src/app/service/rest-api.service';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartItem } from 'src/app/common/cart';
import { Carts } from 'src/app/models/cart';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css','./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product!: Product[];
  Prod: Product;
  products!: Product[];
  btnDisabled= false;
  key='';
  id: any;
  quantity=1;
  quantitys=1;
  confirmMessage='';
  url='http://localhost:3000/api/v1/user/product'
  public items :  CartItem[] = [];
  public grandTotal !: number;
  cart:Carts;
  addCart = false;
  removeItem(item: CartItem){
    this.cartService.removeCartItem(item);
  }
  confirm(confirmDialog: TemplateRef<any>){
    this.confirmMessage = `Bạn muốn tiếp tục mua hàng hay đến với giỏ hàng của bạn để thanh toán! ` ;
    this.modalService.open(confirmDialog, {ariaDescribedBy: 'modal-basic-title'});
  }
  addtocart(item: Product, quantity: number){
    if(quantity === null){
      quantity = 1;
    }
    this.cartService.addfromDetail(item,quantity);
    // window.alert('Sản phẩm đã được thêm vào giỏ hàng, quý khác tiếp tục mua hàng');
  }

  public totalItems: number = 0;
  constructor(
    private rest:RestApiService,
    private data: DataService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private modalService: NgbModal) {
      this.id = route.snapshot.params['id'];
    }
    search(keys: string){
      if (keys!==''){
        this.key=keys;
        this.ngOnInit();
    }
    }
    Pro: any = [];
    Load(quantitys: number) {
      console.log(quantitys)
      if (quantitys > 0) {
        this.quantity = quantitys;
        this.quantitys = quantitys;
        this.ngOnInit()
      }
    }
  ngOnInit(){
    this.productService.getProById(this.id).subscribe((data:any) =>{
      this.Prod = data.product as Product;
      console.log(this.Prod);
    });
    this.btnDisabled=true;
    if(this.key==''){
      this.rest.get(this.url).then(data=>{
        this.product =( data as {product: Product[]}).product;
        this.btnDisabled=false;
      })
      .catch(error=>{
        this.data.error(error['message']);
      })
    }else{
      // this.rest.search(this.url,this.key).then(data=>{
      //   this.product =( data as {product: Product[]}).product;
      //   this.btnDisabled=false;
      // })
      // .catch(error=>{
      //   this.data.error(error['message']);
      // })
    }
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

     this.ngOnInit();
    }
    subQuantity(item: CartItem){
      if(item.quantity === 1 || item.quantity === null || item.quantity <= 0)
      {
        return;
      }
      else
        item.quantity-=1;
        this.cartService.addtoCart(item.product,item.quantity);
        this.ngOnInit();
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
      this.ngOnInit();
    }
    clearCart(){
      this.cartService.removeAllCart();
    }
}
