import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path : '', component: AppComponent,pathMatch:'full'},
    { path : "home", component: HomeComponent},
    { path : "product", component: ProductComponent}
];
