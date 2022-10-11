import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';

import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ItemStyleComponent } from './item-style/item-style.component';
import { getTypePipe } from './getTypePipe';
import { getResistencePipe } from "./getResistancePipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    LoginComponent,
    getTypePipe,
    getResistencePipe,
    CatalogueComponent,
    ItemStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
