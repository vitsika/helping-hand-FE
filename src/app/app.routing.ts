import { Routes } from "@angular/router";
import { ContainerComponent } from "./components/container/container.component";
import { HomeComponent } from "./components/container/home/home.component";
import { ProfilComponent } from "./components/container/profil/profil.component";


export const ROUTES : Routes = [
    {
        path: '',
        component: ContainerComponent,
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
]