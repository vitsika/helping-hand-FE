import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { categories_items } from 'src/app/api/categories';
import { Item_cat } from 'src/app/models/items_cat';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories_data: Item_cat[] = categories_items
  products:Product[] = []
  Initialproducts:Product[] = []
  title:string="Les produits essentiels"
  

  /*----(Booleen) isDisplayModal:Le modal ne s'affiche pas ici----*/
  
    isDisplayModal: boolean = false
    modalProduct: Product | undefined
  
    /* -- Création de variable pour accueillir un Observable */
  
    productsSub: Subscription | undefined


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      /*----Recuperer en Observable et afficher les données dans service.ts----*/
  this.productsSub = this.productService.getProducts()
  .subscribe({
    
    /*-(products: Product[]) c'est ce qui a été indiquer dans product.service.ts(Observable)-*/
    next: (products: Product[])=>{
      this.products = products
      this.Initialproducts = products
      
    },
    /*-En cas d'erreur-*/
    error: (error: any)=>{
      console.log("Error: ", error);
      
    },
    complete: ()=>{
      console.log("complete");
      
    },
    })

    
  }


  filterProducts  = (catName:string) => {
    // filter product by cat name
    console.log(this.categories_data)
    console.log(this.Initialproducts)
    let p = this.Initialproducts.filter((e:any) => e.category.some((cat:any) => cat.name === catName))
    this.products = p
    this.title = catName
    if (catName==="Tous"){
      this.products = this.Initialproducts
    }

  }

  /*-Supprimer la variable si le composant n'existe plus-*/
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
  }

  handleDisplayProductViewModal(product: Product){
    console.log(product);
    /*----affichage de modal si condition true------*/
    if(product){
      this.isDisplayModal = true
      /*------la valeur product_ppn dans le modal-----*/
      this.modalProduct = product
    }
  }

  handleCloseModal(){
    this.isDisplayModal = false
    this.modalProduct = undefined
  }
  

  


}
