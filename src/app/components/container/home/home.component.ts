import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { categories_items } from 'src/app/api/categories';
import { Item_cat } from 'src/app/models/items_cat';
import { Product } from 'src/app/models/product';
import { LoadingService } from 'src/app/services/loading.service';
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
  title:string="Tous produits"
  loading$ = this.loader.loading$
  

  /*----(Booleen) isDisplayModal:Le modal ne s'affiche pas ici----*/
  
    isDisplayModal: boolean = false
    modalProduct: Product | undefined

    /* -- Création de variable pour accueillir un Observable */
  
    productsSub: Subscription | undefined



  constructor(private productService: ProductService, public loader: LoadingService, private http: HttpClient) { }
/* fonction Get de api pour le spinner*/
  fetchCat(){
    this.http.get('assets/api/categories.json').subscribe(res=> {
      console.log(res);
      
    })
  }

  ngOnInit(): void {
      /*----Recuperer en Observable et afficher les données dans service.ts----*/
  this.productsSub = this.productService.getProducts()

  .subscribe({
    /*-(products: Product[]) vient de product.service.ts(Observable)-*/
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
    /* Filtrage de tous les produits appeler Initialproducts ici*/
    let p = this.Initialproducts.filter((e:any) => e.category.some((cat:any) => cat.name === catName))
    /* Affichage dynamique de la variable p (categorie choisie), la valeur de this.pruducts devient la valeur de p*/
    this.products = p
    /* Idem pour le titre */
    this.title = catName
    /* si l'user clique sur l'onglet tous nos produits dans la barre de categorie */
    if (catName==="Tous produits"){
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
