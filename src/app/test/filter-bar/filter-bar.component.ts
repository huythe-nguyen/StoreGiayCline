import { RestApiService } from './../../service/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {


  gender: any;
  status: any;
  selling: any;
  product!: Product;
  products!: Product[];
  price1: number;
  price2: number;
  color: string;
  isColorChecked = false;

  url='http://localhost:3000/api/v1/user/product';

  public totalItems: number = 0;
  constructor(
    private rest:RestApiService,
    private data: DataService,
    private route: ActivatedRoute,
    private _router: Router){
      // this.secondhand = route.snapshot.params['secondhand'];
      // this.new = route.snapshot.params['new'];
    //   this.route.queryParams
    //   .subscribe(params => {
    //     console.log(params); // { orderby: "price" }
    //     this.status = params.status;
    //     this.gender = params.gender;
    //     this.selling = params.selling;
    //     this.color = params.color;
    //     console.log(this.status);
    //     this.rest.search(this.url,{status:this.status,gender:this.gender,color:this.color,selling:this.selling}).then((data:any)=>{
    //       this.products =data.data.data as Product[];
    //       this.btnDisabled=false;
    //       console.log(data);
    //     }) // price
    //   }
    // );
    }
    filterPrice(min: number, max: number){
      this.price1 = min;
      this.price2 =  max;
    }
    navigateToFoo(color:string,element:any){
      const checkboxRadio =document.getElementsByName('radio-checkbox');
      checkboxRadio.forEach((item:any)=>{
        item.checked = false;
      })
      element.checked = true;
      if(this.isColorChecked){
        color = '';}
      this._router.navigate([], {
       relativeTo: this.route,
       queryParams: {
         status : this.status,
         color : color,
      //   price1: color,

       },
       queryParamsHandling: 'merge',
       skipLocationChange: false
     });
     this.isColorChecked = !this.isColorChecked;
    }

  ngOnInit(){
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.status = params.status;
      this.gender = params.gender;
      this.selling = params.selling;
      this.color = params.color;
      this.price1 = params.price1;
      this.price2 = params.price2;
      console.log(this.status);
      this.rest.search(this.url,{status:this.status,gender:this.gender,color:this.color,selling:this.selling,price1:this.price1,price2:this.price2}).then((data:any)=>{
        this.products =data.data.data as Product[];
        console.log(data);
      }) // price
    }
  );
    // this.btnDisabled=true;
    // if(this.key==''){
      // this.rest.get(this.url).then((data:any)=>{
      //   this.products = data.data.data as Product[];
      //   this.btnDisabled=false;
      // })
    //   .catch(error=>{
    //     this.data.error(error['message']);
    //   })
    // }else{
    //   // this.rest.search(this.url,this.key).then(data=>{
    //   //   this.products =( data as {products: Product[]}).products;
    //   //   this.btnDisabled=false;
    //   // })
    //   // .catch(error=>{
    //   //   this.data.error(error['message']);
    //   // })
    // }

  }
}
