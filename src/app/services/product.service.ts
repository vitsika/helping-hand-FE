import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /*------Centralisation de tout les données products---*/
  private products: Product[] = []
  /*-Recuperation via une requette http  en passant par environnement -*/
  private urlApi: string = environment.serverUrl.products

  
  private productSubject:BehaviorSubject<any> = new BehaviorSubject({}) 
    
  
  constructor(private http: HttpClient) { }

  /*Récupération des produits par la fonction et injecter dans product_list en promise---

  getProducts(): Promise<Product[]>{
    return new Promise((resolve, reject)=>{
      if(this.products.length){
        resolve(this.products)
      }else{
        reject([])
      }
    })
  }*/
  getProducts(): Observable<Product[]>{
    /*
    GET=> récupèrer des données
    POST=> Envoyer des données
    PUT et Pacth=> Modification des données existantes sur le serveur
    DELETE=> supprimer des données existantes sur le serveur 
    */
    /*-Retourner un OBSERVABLE -*/
    return this.http.get<Product[]>(this.urlApi)
  }
  
  // addProducts(product: Product){
  
  // }
  // editProducts(_id: string,product: Product){
  
  // }
  // deleteProducts(_id: string){
  
  // }

  getProductSubject (): Observable<any>{
    return this.productSubject.asObservable();
  }

  setProductSubject (products: any){
    this.productSubject.next(products)
  }

}
