import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.scss']
})
export class ModalProductViewComponent implements OnInit {
  /*Preparation pour recevoir les données de la part du parent product.ts */
  /* pour l'affichage dans le modal de ce qui a été cliquer */
  @Input() product : Product | undefined
  
  /* Creation fermeture du modal avec le bouton fermr*/
  @Output() close : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.close.emit()
  }
}

