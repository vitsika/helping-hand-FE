import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/*----Import de product du product.ts dans le composant modal---*/
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.scss']
})
export class ModalProductViewComponent implements OnInit {

  /*---Transmission de données(parents) de product-list-ppn.ts "Undefined= au cas ou ca n'existe pas" -----*/

  @Input()  product_ppn: Product | undefined
  /*------Envoyer un message a son parent product_list pour fermer le modal afficher----*/
  @Output() close : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.close.emit()
  }
}
