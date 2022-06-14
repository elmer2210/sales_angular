import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CustomerComponent} from './pages/customer/customer.component';
import {CreateComponent} from './pages/customer/create/create.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'customers',
    component: CustomerComponent
  },
  {
    path: 'customers/add',
    component: CreateComponent
  },
  {
    path: 'customers/update/:id',
    component: CreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
