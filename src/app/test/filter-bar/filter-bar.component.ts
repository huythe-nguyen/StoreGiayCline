import { RestApiService } from './../../service/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  product!: Product;
  products!: Product[];
  btnDisabled= false;
  key='';
  url='http://localhost:3000/api/v1/user/product'

  public totalItems: number = 0;
  constructor(
    private rest:RestApiService,
    private data: DataService) {
    }
    search(keys: string){
      if (keys!==''){
        this.key=keys;
        this.ngOnInit();
    }
    }
  ngOnInit(){

    // this.productService.getAll().subscribe(data => {
    //   this.products = data as Product[];
    // })

    this.btnDisabled=true;
    if(this.key==''){
      this.rest.get(this.url).then((data:any)=>{
        this.products =( data.products as Product[]);
        this.btnDisabled=false;
        console.log(this.product);
      })
      .catch(error=>{
        this.data.error(error['message']);
      })
    }else{
      this.rest.search(this.url,this.key).then(data=>{
        this.products =( data as {products: Product[]}).products;
        this.btnDisabled=false;
      })
      .catch(error=>{
        this.data.error(error['message']);
      })
    }
  }

}
