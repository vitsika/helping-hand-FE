import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductItemComponent implements OnInit {
  /*--------Ajout de @Input transmission du parent product_list à product_item----*/
  @Input() product : Product | undefined

  /*--------Ajout @Output pour le view modal- envoie enfant vers parents- Home---------------*/
  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
    
  }

  handleClickProduct(product: Product | undefined){
    /*recup l'event(displayProductViewModal) et l'emettre et envoyer les données recus en parametre ici product*/
    this.displayProductViewModal.emit(product)
    
  }
}
