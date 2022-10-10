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
import { ButtonComponent } from '../assets/button/button.component';
import { PageTitleComponent } from '../assets/page-title/page-title.component';

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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
