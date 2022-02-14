import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from 'src/main-page/components/body/body.component';
import { HeaderComponent } from 'src/main-page/components/header/header.component';
import { CarExtrasComponent } from './components/car-extras/car-extras.component';
import { CarsComponent } from './components/cars/cars.component';


const routes: Routes = [
  { path: "", component: BodyComponent },
  { path: "cars", component: CarsComponent },
  { path: "cars/car-extras/:carId", component: CarExtrasComponent },
  { path: "cars/car-extras/:carId/payment", component: CarExtrasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
