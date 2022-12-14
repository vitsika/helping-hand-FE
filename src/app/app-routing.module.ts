import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/container/home/home.component';
import { ProfilComponent } from './components/container/profil/profil.component';
import { SigninComponent } from './components/container/signin/signin.component';
import { SignupComponent } from './components/container/signup/signup.component';
import { AuthguardGuard } from './guards/authguard.guard';

const ROUTES : Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
  },
/*--Creation route vers la page de profil--*/
  {
      path: 'edit-profil',
      component: ProfilComponent,
      pathMatch: 'full',
      // canActivate:[AuthguardGuard]
  },
/*--Creation route vers la page d'accueil--*/
  {
      path: 'home',
      component: HomeComponent,
      pathMatch: 'full'
  },
  {
      path: 'connexion',
      component: SigninComponent,
  },
  {
      path: 'inscription',
      component: SignupComponent,
      pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
