import { RestApiService } from './../../service/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/service/data.service';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  fill: any;
  fillPro: any;
  fillCategory: string = "";
  product!: Product;
  products!: Product[];
  btnDisabled= false;
  key='';
  url='http://localhost:3000/api/v1/user/product'

  public totalItems: number = 0;
  constructor(
    private rest:RestApiService,
    private data: DataService,
    private cartService: CartService,
    private route: ActivatedRoute) {
      this.fill = route.snapshot.params['fillter'];
    }
    search(keys: string){
      if (keys!==''){
        this.key=keys;
        this.ngOnInit();
    }
    }
  ngOnInit(){
    // if(this.fill === "all"){
    //   this.fillPro = '';
    // }
    // else if(this.fill === "new"){
    //   this.fillCategory = 'status';
    //   this.cartService.filterP.subscribe((val :any) =>{
    //       this.fillPro = val;
    //       console.log(this.fillPro);
    //     })
    // }
    // else if(this.fill === "nam"){
    //   this.fillCategory = 'gender';
    //   this.cartService.filterP.subscribe((val :any) =>{
    //     this.fillPro = val;
    //     console.log(this.fillPro);
    //   })
    // }
    this.cartService.filterP.subscribe((val :any) =>{
        if(this.fill === "all"){
          this.fillPro = '';
        }else if(this.fill === "new"){
          this.fillCategory = 'status';
        }else if(this.fill === "nam"){
          this.fillCategory = 'gender';
        }
          this.fillPro = val;

        })
    this.btnDisabled=true;
    if(this.key==''){
      this.rest.get(this.url).then((data:any)=>{
        this.products = data.data.data as Product[];
        this.btnDisabled=false;
        console.log(data);
      })
      .catch(error=>{
        this.data.error(error['message']);
      })
    }else{
      // this.rest.search(this.url,this.key).then(data=>{
      //   this.products =( data as {products: Product[]}).products;
      //   this.btnDisabled=false;
      // })
      // .catch(error=>{
      //   this.data.error(error['message']);
      // })
    }
    // this.cartService.search.subscribe((val :any) =>{
    //   this.searchKey = val;
    //   console.log(this.searchKey);
    // })
  }

}
