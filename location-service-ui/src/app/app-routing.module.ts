import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLocationListComponent } from './customer-location-list/customer-location-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreViewComponent } from './store-view/store-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'locations',
    pathMatch: 'full'
  },
  {
    path: 'locations',
    component: CustomerLocationListComponent
  },
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path: 'view',
    component: CustomerViewComponent
  },
  {
    path: 'stores',
    component: StoreListComponent
  },
  {
    path: 'storeview',
    component: StoreViewComponent
  },
  {
    path: '**',
    redirectTo: 'locations'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
