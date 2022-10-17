import { Routes } from "@angular/router";
import { ContainerComponent } from "./components/container/container.component";
import { CategoriesComponent } from "./components/container/home/categories/categories.component";
import { HomeComponent } from "./components/container/home/home.component";
import { ProductItemComponent } from "./components/container/home/products/ppn/product-item-ppn/product-item-ppn.component";
import { ProductListComponent } from "./components/container/home/products/ppn/product-list-ppn/product-list-ppn.component";
import { ProfilComponent } from "./components/container/profil/profil.component";


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
/*--Creation route vers la categorie--*/
    {
        path: 'ppn',
        component: ProductListComponent,
        pathMatch: 'full'
    },

]