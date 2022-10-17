import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-ppn',
  templateUrl: './product-list-ppn.component.html',
  styleUrls: ['./product-list-ppn.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
/*----Creation de la variable(tab) "products_ppn"----*/

  products_ppn : Product[] = []

/*----(Booleen) isDisplayModal:Le modal ne s'affiche pas ici----*/

  isDisplayModal: boolean = false
  modalProduct: Product | undefined

  /* -- Création de variable pour accueillir un Observable */

  productsSub: Subscription | undefined

  /*----- injection du projectService cad les données classées dans service.ts--*/
  constructor(private productService: ProductService) { }
  /*----- Recuperer et afficher les données dans service.ts----*/
  ngOnInit(): void {

  /*----Recuperer en Observable et afficher les données dans service.ts----*/
  this.productsSub = this.productService.getProducts()
  .subscribe({
    
    /*-(products: Product[]) c'est ce qui a été indiquer dans product.service.ts(Observable)-*/
    next: (products: Product[])=>{
      this.products_ppn = products
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


  /*-Supprimer la variable si le composant n'existe plus-*/
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
  }

  handleDisplayProductViewModal(product_ppn: Product){
    console.log(product_ppn);
    /*----affichage de modal si condition true------*/
    if(product_ppn){
      this.isDisplayModal = true
      /*------la valeur product_ppn dans le modal-----*/
      this.modalProduct = product_ppn
    }
  }

  handleCloseModal(){
    this.isDisplayModal = false
    this.modalProduct = undefined
  }
}
