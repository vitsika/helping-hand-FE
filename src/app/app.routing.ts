import { Routes } from "@angular/router";
import { HomeComponent } from "./components/container/home/home.component";
import { ProfilComponent } from "./components/container/profil/profil.component";
import { SigninComponent } from "./components/container/signin/signin.component";
import { SignupComponent } from "./components/container/signup/signup.component";


export const ROUTES : Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
/*--Creation route vers la page de profil--*/
    {
        path: 'edit-profil',
        component: ProfilComponent,
        pathMatch: 'full'
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