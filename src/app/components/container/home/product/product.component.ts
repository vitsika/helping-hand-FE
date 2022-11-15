import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductItemComponent implements OnInit {
  /*--------Ajout de @Input transmission du parent product_list à product_item----*/
  @Input() product : Product | undefined
  loading$ = this.loader.loading$

  /*--------Ajout @Output pour le view modal- envoie enfant vers parents- Home---------------*/
  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(public loader: LoadingService, private http: HttpClient) { }

  fetchProduct(){
    this.http.get('assets/api/products_ppn.json').subscribe(res=> {
      // console.log(res);
      
    })
  }

  ngOnInit(): void {
    // console.log(this.product);
    
  }

  handleClickProduct(product: Product | undefined){
    /*recup l'event(displayProductViewModal) et l'emettre et envoyer les données recus en parametre ici product*/
    this.displayProductViewModal.emit(product)
    
  }
}
