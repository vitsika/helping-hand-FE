import { Component, OnInit } from '@angular/core';
import { categories_items } from 'src/app/api/categories';
import { Item_cat } from 'src/app/models/items_cat';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories_data: Item_cat[] = categories_items
  products:any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductSubject().subscribe(p => {
      this.products = p
    })
  }


  filterProducts  = (catName:string) => {

    console.log("this.categories_data)",this.categories_data)
    console.log("this.products)",this.products)

    // filter product by cat name
    let p = this.products.filter((e:any) => e.category.some((cat:any) => cat.name === catName))
    this.productService.setProductSubject(p)

  }

}
