import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/service/data.service';
import { RestApiService } from 'src/app/service/rest-api.service';
import {Sort} from '../../common/sort';
@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {
  product!: Product[];
  sorts: Sort[];
  btnDisabled= false;
  key='';
  url='http://localhost:3000/api/v1/admin/product'
    selectedCities: Sort;

    constructor(private rest:RestApiService,
      private data: DataService) {
        this.sorts = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

  ngOnInit() {
    this.btnDisabled=true;
    if(this.key==''){
      this.rest.get(this.url).then(data=>{
        this.product =( data as {product: Product[]}).product;
        this.btnDisabled=false;
      })
    }else{
      this.rest.search(this.url,this.key).then(data=>{
        this.product =( data as {product: Product[]}).product;
        this.btnDisabled=false;
      })
    }
  }

}
