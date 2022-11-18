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
import { HomeComponent } from './components/container/home/home.component';
import { SearchBarComponent } from './components/container/home/search-bar/search-bar.component';
import { ProductItemComponent } from './components/container/home/product/product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { ModalProductViewComponent } from './components/modal-product-view/modal-product-view.component';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './services/network.interceptor';
import { SignupComponent } from './components/container/signup/signup.component';
import { SigninComponent } from './components/container/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { AuthguardService } from './services/AuthguardService';


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
    HomeComponent,
    SearchBarComponent,
    AsideNavComponent,
    ProductItemComponent,
    ModalProductViewComponent,
    LoadingComponent,
    SignupComponent,
    SigninComponent,
  ],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],

  providers: [
    AuthguardService,
    
    {
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  },
  
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '874209430174-c9en807262b89nlqrhp5235h54uim2ro.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
