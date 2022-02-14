import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from 'src/main-page/main-page.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarExtrasComponent } from './components/car-extras/car-extras.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarExtrasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
