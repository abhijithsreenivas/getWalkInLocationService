import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLocationListComponent } from './customer-location-list/customer-location-list.component';
import { ApiService } from './shared/services/api.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreViewComponent } from './store-view/store-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerLocationListComponent,
    CustomerListComponent,
    CustomerViewComponent,
    StoreListComponent,
    StoreViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
