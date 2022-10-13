import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // product : object[] = [{
  //   name:"Riz 10 kg",
  //   description:"Riz D' Ambatondrazaka",
  //   prix:" 200000 Ar , 25 €"
  // }]

  // products: Product[] = [
  //   {
  //   name: "Riz d'Amabato",
  //   description: "Sac de 10kg riz Blanc",
  //   imageUrl: "",
  //   categories:[],
  //   prix: 20  ,
  //   created_at: new Date,
  //   }
  // ]

  constructor() { }

  ngOnInit(): void {
  }

}
