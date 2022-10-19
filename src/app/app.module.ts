import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterLeftComponent } from './components/footer/footer-left/footer-left.component';
import { FooterRightComponent } from './components/footer/footer-right/footer-right.component';
import { FooterLeftOneComponent } from './components/footer/footer-left-one/footer-left-one.component';
import { FooterLeftTwoComponent } from './components/footer/footer-left-two/footer-left-two.component'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfilComponent } from './components/container/profil/profil.component';
import { ProfilNameComponent } from './components/container/profil/profil-name/profil-name.component';
import { EditionComponent } from './components/container/profil/edition/edition.component';
import { UserProfilComponent } from './components/container/profil/edition/user-profil/user-profil.component';
import { ContactProfilComponent } from './components/container/profil/edition/contact-profil/contact-profil.component';
import { AboutMeComponent } from './components/container/profil/edition/about-me/about-me.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/components-tools/button/button.component';
import { PageTitleComponent } from './components/components-tools/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { ProductsComponent } from './components/container/home/products/products.component';
import { HomeComponent } from './components/container/home/home.component';
import { SearchBarComponent } from './components/container/home/search-bar/search-bar.component';
import { CategoriesComponent } from './components/container/home/categories/categories.component';
import { ProductListComponent } from './components/container/home/products/ppn/product-list-ppn/product-list-ppn.component';
import { ProductItemComponent } from './components/container/home/products/ppn/product-item-ppn/product-item-ppn.component';
import { PpnComponent } from './components/container/home/products/ppn/ppn.component';
import { SanteHygieneComponent } from './components/container/home/products/sante-hygiene/sante-hygiene.component';
import { KitScolaireComponent } from './components/container/home/products/kit-scolaire/kit-scolaire.component';
import { TravauxComponent } from './components/container/home/products/travaux/travaux.component';
import { CultureComponent } from './components/container/home/products/culture/culture.component';
import { ModalProductViewComponent } from './components/modal-product-view/modal-product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    FooterLeftComponent,
    FooterRightComponent,
    FooterLeftOneComponent,
    FooterLeftTwoComponent,
    ProfilComponent,
    ProfilNameComponent,
    EditionComponent,
    UserProfilComponent,
    ContactProfilComponent,
    AboutMeComponent,
    ButtonComponent,
    PageTitleComponent,
    ProductsComponent,
    HomeComponent,
    SearchBarComponent,
    CategoriesComponent,
    ProductListComponent,
    ProductItemComponent,
    PpnComponent,
    SanteHygieneComponent,
    KitScolaireComponent,
    TravauxComponent,
    CultureComponent,
    ModalProductViewComponent,
    ProductsContainerComponent,
    AsideNavComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
