import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartService } from '../service/cart.service';
import { Product } from '../models/product';
import { RestApiService } from '../service/rest-api.service';
import { DataService } from '../service/data.service';
import { Sort } from '../common/sort';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  product!: Product[];
  products!: Product[];
  sorts: Sort[];
  btnDisabled= false;
  key='';
  url='http://localhost:3000/api/v1/admin/product'
  selectedCities: Sort;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public totalItems: number = 0;
  constructor(private breakpointObserver: BreakpointObserver,
     private cartService: CartService
    ,private rest:RestApiService,
    private data: DataService) {
      this.sorts = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
    }
    search(keys: string){
      if (keys!==''){
        this.key=keys;
        this.ngOnInit();
    }
    }
  ngOnInit(){
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
      this.rest.search(this.url,this.key).then(data=>{
        this.product =( data as {product: Product[]}).product;
        this.btnDisabled=false;
      })
      .catch(error=>{
        this.data.error(error['message']);
      })
    }
  }

}
