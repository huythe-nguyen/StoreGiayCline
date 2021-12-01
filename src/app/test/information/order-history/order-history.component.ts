import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  url='';


  constructor(private rest: RestApiService,
    ) { }

  ngOnInit() {
  }

}
