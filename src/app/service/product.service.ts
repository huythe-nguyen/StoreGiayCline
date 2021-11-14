import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/api/v1/user/product';

constructor(private httpClient: HttpClient) {

}
getAll(){
  return this.httpClient.get(this.url)
}
getProById(id: any){
  return this.httpClient.get(this.url+'/'+id)
}
getProduct(){
  return this.httpClient.get<any>("http://localhost:3000/api/v1/admin/product")
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
