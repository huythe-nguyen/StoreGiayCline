import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css','./category.scss']
})
export class CategoryComponent implements OnInit {
  rangeValues: number[] = [10,100];
  selectedCities: string[] = [];

  selectedCategories: any[] = ['Technology', 'Sports'];

  categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

  checked: boolean = false;
  constructor() {
   }
   items: MenuItem[] = [];
  ngOnInit() {
    this.selectedCategories = this.categories.slice(1,3);
    this.items = [
      {label: 'Mới'},
      {label: 'SecondHand'},
      {label: 'Nam '},
      {label: 'Nữ'},
      {
          label: 'Thương hiệu',
          items: [{
                  label: 'New',
              },
              {label: 'Open'},
              {separator: true},
              {label: 'Quit'}
          ]
      },]
  }
}
