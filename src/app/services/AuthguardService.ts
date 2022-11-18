import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor() { }
  gettoken(){ 

    debugger;
      return !!localStorage.getItem("idToken");
    
  }
}
