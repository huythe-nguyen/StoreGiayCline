import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public status : string = '';
  public gender : string = '';
  public selling : string = '';
  constructor(private route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }
  navigateToFoo(filter: string){
    if(filter === 'new' || filter === 'seconhand'){
      this.status =  filter;
      this.gender = '';
      this.selling = '';
    }else if(filter === 'nam' || filter === 'nu'){
      this.gender = filter;
      this.status = '';
      this.selling = '';
    }
    else{
      this.selling = filter;
      this.gender = '';
      this.status = '';
    }

    this._router.navigate(['/homes'], {
     relativeTo: this.route,
     queryParams: {
       status : this.status,
       gender : this.gender,
       selling: this.selling,

     },
     queryParamsHandling: 'merge',
     skipLocationChange: false
   });
  }
}
