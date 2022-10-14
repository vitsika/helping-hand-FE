import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item-ppn',
  templateUrl: './product-item-ppn.component.html',
  styleUrls: ['./product-item-ppn.component.scss']
})
export class ProductItemComponent implements OnInit {
  /*--------Ajout de @Input transmission du parent product_list à product_item----*/
  @Input() product_ppn : Product | undefined

  /*--------Ajout @Output pour le view modal-----------------*/
  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.product_ppn);
    
  }

  handleClickProduct(product_ppn: Product | undefined){
    this.displayProductViewModal.emit(product_ppn)
    
  }
}
