import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { CatalogueComponent } from './Components/catalogue/catalogue.component';
import { LoginComponent } from './Components/login/login.component';
import { ValidationTableComponent } from './Components/validation-table/validation-table.component';
import { DragAndDropComponent } from './Components/drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'home', component: CarouselComponent},
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'validation-table', component: ValidationTableComponent},
  {path: 'design', component: DragAndDropComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }