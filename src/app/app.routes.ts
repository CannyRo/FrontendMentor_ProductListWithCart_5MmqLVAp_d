import { Routes } from '@angular/router';
import { DessertComponent } from './page/dessert/dessert.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "dessert", component: DessertComponent, title: "Dessert "},
    { path: "", redirectTo: "/dessert", pathMatch: "full"},
    { path:"**", component: PageNotFoundComponent, title: "Page not found"}
];
