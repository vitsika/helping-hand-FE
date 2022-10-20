import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { ResultRequest } from '../models/result-request';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private urlApi: string = environment.serverUrl.categories

/*Requete via le module htppClient */
  constructor(private http: HttpClient) { }

  /*recuperer category en mode Tab*/
  getCategories(): Observable<ResultRequest<Category>> {
    return this.http.get<ResultRequest<Category>>(this.urlApi)
  }


}
