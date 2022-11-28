import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { LoginComponent } from './Components/login/login.component';
import { CatalogueComponent } from './Components/catalogue/catalogue.component';
import { ItemStyleComponent } from './Components/item-style/item-style.component';
import { ValidationTableComponent } from './Components/validation-table/validation-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './Components/drag-and-drop/drag-and-drop.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OnclickPieceComponent } from './Components/onclick-piece/onclick-piece.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { InterceptorsService } from './Services/interceptors.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard  } from "./Services/auth/auth.guard";
import { AuthService } from './Services/auth-service.service';
import { VisualizeComponent } from './Components/visualize/visualize.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    LoginComponent,
    CatalogueComponent,
    ItemStyleComponent,
    ValidationTableComponent,
    DragAndDropComponent,
    OnclickPieceComponent,
    UserRegisterComponent,
    VisualizeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    DragDropModule,
    NoopAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true },[AuthService, AuthGuard], CatalogueComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }