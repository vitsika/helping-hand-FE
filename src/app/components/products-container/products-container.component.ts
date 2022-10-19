import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ResultRequest } from 'src/app/models/result-request';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit , OnDestroy{

  categories: ResultRequest<Category> | undefined
  categoriesSub: Subscription | undefined

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    /* Recuperer les données des produits attendus*/
    this.categoriesSub = this.categoriesService.getCategories()
    .subscribe({
      next: (value: ResultRequest<Category>)=>{
        this.categories = value
        
      }
    })
  }

  ngOnDestroy(): void {
    this.categoriesSub?.unsubscribe()
  }
}
