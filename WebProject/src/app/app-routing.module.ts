import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { CatalogueComponent } from './Components/catalogue/catalogue.component';
import { LoginComponent } from './Components/login/login.component';
import { ValidationTableComponent } from './Components/validation-table/validation-table.component';
import { DragAndDropComponent } from './Components/drag-and-drop/drag-and-drop.component';
import { AuthGuard  } from "./Services/auth/auth.guard";

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'home', component: CarouselComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'catalogue', component: CatalogueComponent, canActivate:[AuthGuard] },
  { path: 'validation-table', component: ValidationTableComponent, canActivate:[AuthGuard]},
  {path: 'design', component: DragAndDropComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }