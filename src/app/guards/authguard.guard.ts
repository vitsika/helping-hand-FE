import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../services/AuthguardService';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private AuthguardService : AuthguardService ,private router: Router) { }

    canActivate(): boolean { 
      {

        if(!this.AuthguardService.gettoken())
        {
    
          this.router.navigateByUrl("/connexion");
    
        }
        return this.AuthguardService.gettoken();
      } 
  }
  
}
