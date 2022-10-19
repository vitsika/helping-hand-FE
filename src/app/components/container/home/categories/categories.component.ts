import { Component, OnInit } from '@angular/core';
import { categories_items } from 'src/app/api/categories';
import { Item_cat } from 'src/app/models/items_cat';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories_data: Item_cat[] = categories_items

  constructor() { }

  ngOnInit(): void {
  }

}
