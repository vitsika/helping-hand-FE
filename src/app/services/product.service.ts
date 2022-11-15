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

}
