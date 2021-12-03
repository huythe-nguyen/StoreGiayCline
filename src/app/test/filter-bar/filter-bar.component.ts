import { RestApiService } from './../../service/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

 totalLength: number;
 page:number = 1;
  gender: any;
  status: any;
  selling: any;
  product!: Product;
  products!: Product[];
  price1: number;
  price2: number;
  color: string;
  size: number;
  brand:string;
  isColorChecked = false;
  isSizeChecked = false;
  rangeValues: number[] = [100000,10000000];

  url='http://localhost:3000/api/v1/user/product';

  public totalItems: number = 0;
  constructor(
    private rest:RestApiService,
    private data: DataService,
    private route: ActivatedRoute,
    private _router: Router){
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
    navigateToPrice(){
     // element.checked = true;
      // if(this.isColorChecked){
      //   pri = '';}
      this._router.navigate([], {
       relativeTo: this.route,
       queryParams: {
         price1 : this.rangeValues[0],
         price2: this.rangeValues[1],

       },
       queryParamsHandling: 'merge',
       skipLocationChange: false
     });
    //  this.isColorChecked = !this.isColorChecked;
    }
    navigateToBrand(brand:string){
      const checkboxRadio =document.getElementsByName('radio-checkbox');
      checkboxRadio.forEach((item:any)=>{
        item.checked = false;
      })
     // element.checked = true;
      if(this.isColorChecked){
        brand = '';
        this.ngOnInit();
      }
      this._router.navigate([], {
       relativeTo: this.route,
       queryParams: {
        status : this.status,
        size : this.size,
        color : this.color,
         brand : brand,
      //   price1: color,

       },
       queryParamsHandling: 'merge',
       skipLocationChange: false
     });
     this.isColorChecked = !this.isColorChecked;
     this.ngOnInit();
    }
    navigateToFoo(color:string){
      const checkboxRadio =document.getElementsByName('radio-checkbox');
      checkboxRadio.forEach((item:any)=>{
        item.checked = false;
      })
     // element.checked = true;
      if(this.isColorChecked){
        color = '';
        this.ngOnInit();
      }
      this._router.navigate([], {
       relativeTo: this.route,
       queryParams: {
         status : this.status,
         size : this.size,
         brand:this.brand,
         color : color,
      //   price1: color,

       },
       queryParamsHandling: 'merge',
       skipLocationChange: false
     });
     this.isColorChecked = !this.isColorChecked;
     this.ngOnInit();
    }
    navigateToSize(size:number){
      const checkboxRadio =document.getElementsByName('radio-checkbox');
      checkboxRadio.forEach((item:any)=>{
        item.checked = false;
      })
     // element.checked = true;
      if(this.isSizeChecked){
        size = 40;
        this.ngOnInit();
      }
      this._router.navigate([], {
       relativeTo: this.route,
       queryParams: {
         status : this.status,
         size : size,
         brand:this.brand,
         color : this.color
      //   price1: color,

       },
       queryParamsHandling: 'merge',
       skipLocationChange: false
     });
     this.isSizeChecked = !this.isSizeChecked;
     this.ngOnInit();
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
      this.size = params.size;
      this.brand=params.brand
      console.log(this.status);
      this.rest.search(this.url,{status:this.status,gender:this.gender,
                                  color:this.color,selling:this.selling,
                                  price1:this.price1,price2:this.price2,
                                  size:this.size,brand:this.brand}).then((data:any)=>{
        this.products =data.data.data as Product[];
        this.totalLength = data.data.data.length;
        console.log(this.totalLength);
      }) // price
    }
  );

  }
}
