import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list-ppn',
  templateUrl: './product-list-ppn.component.html',
  styleUrls: ['./product-list-ppn.component.scss']
})
export class ProductListComponent implements OnInit {
/*----Creation de la variable(tab) "products_ppn_ppn"----*/

  products_ppn : Product[] = []

/*----(Booleen) isDisplayModal:Le modal ne s'affiche pas ici----*/

isDisplayModal: boolean = false
  modalProduct: Product | undefined

  constructor() { }

  ngOnInit(): void {
    this.products_ppn =  [
        {
          _id: '1255452',
          name: 'Sac de Riz Blanc Makalioka 50 kg',
          description: 'Riz blanc 50kg Makalioka de Madagascar.',
          category: [ 'Riz','Ppn' ],
          imageUrl: [
            '/assets/images/products_ppn/ppn_riz/ppn_riz_1/1.jpeg',
          ],
          euro_price: 4999,
          ariary_price: 200000,
          created_at: new Date,
        },
        {
          _id: '185452',
          name: 'Sac de Riz Blanc Makalioka 25 kg',
          description: 'Riz blanc 25kg Makalioka de Madagascar.',
          category: [ 'Riz','Ppn' ],
          imageUrl: [
            '/assets/images/products_ppn/ppn_riz/ppn_riz_2/1.jpeg',
          ],
          euro_price: 2599,
          ariary_price: 100000,
          created_at: new Date,
        },
        {
          _id: '854122',
          name: 'Lot de 10 Spaghetti 1kg',
          description: 'Spaghetti Marque Maison de 1kg',
          category: [ 'Pattes','Ppn' ],
          imageUrl: [
            '/assets/images/products_ppn/ppn_pattes/ppn_pattes_1/1.jpeg',
          ],
          euro_price: 1599,
          ariary_price: 500000,
          created_at: new Date,
        },
        {
          _id: '785426',
          name: 'Lot de 10 Tagliatelle 500g',
          description: 'Tagliatelle nature aux œufs 500g',
          category: [ 'Pattes','Ppn' ],
          imageUrl: [
            '/assets/images/products_ppn/ppn_pattes/ppn_pattes_2/2.jpeg',
          ],
          euro_price: 1599,
          ariary_price: 200000,
          created_at: new Date,
        },
        {
          _id: '1257542',
          name: 'Lot 10 sachets de sucre 1 kg',
          description: "Sucre roux d'amiblobe ",
          category: [ 'Sucre', 'Ppn' ],
          imageUrl: [
            '/assets/images/products_ppn/ppn_sucre/1.jpeg',
          ],
          euro_price: 1699,
          ariary_price: 200000,
          created_at: new Date,
        },
        {
          _id: '1257452',
          name: 'Lot 10 farines Ramatoa 1kg ',
          description: 'Farine Ramatoa multi-usage',
          category: [ 'Farine', 'Ppn' ],
          imageUrl: [
            '/assets/images/products_ppn/ppn_farine/1.jpeg',
          ],
          euro_price: 1399,
          ariary_price: 200000,
          created_at: new Date,
        },
        {
          _id: '3655452',
          name: 'Lot  5 haricots Ramatoa 1 kg',
          description: 'Haricots secs Ramatoa ',
          category: [ 'Haricots', 'Ppn' ],
          imageUrl: [
            '/assets/images/products_ppn/ppn_haricots/1.jpeg',
          ],
          euro_price: 9699,
          ariary_price: 200000,
          created_at: new Date,
        },
        {
          _id: '1546352',
          name: 'Huile de soja Hina 20l',
          description: 'Huile de soja Hina sans additifs',
          category: [ 'Huile', 'Ppn' ],
          imageUrl: [
            '/assets/images/products_ppn/ppn_huile/1.jpeg',
          ],
          euro_price: 6899,
          ariary_price: 200000,
          created_at: new Date,
        },
      ]
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
