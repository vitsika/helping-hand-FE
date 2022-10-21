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

  /*--------Ajout @Output pour le view modal-----------------*/
  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
    
  }

  handleClickProduct(product: Product | undefined){
    this.displayProductViewModal.emit(product)
    
  }
}
