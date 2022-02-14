import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';
import { environment } from 'src/environments/environment';
import { CarImageService } from 'src/main-page/services/car-image.service';
import { CarService } from 'src/main-page/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: CarDetailDto[]

  constructor(private carService: CarService, private carImageService: CarImageService) { }
  baseUrl =environment.imageBase
    defaultImage=environment.defaultImage
  ngOnInit(): void {
    this.getCarsDetail()
  }

  getCarsDetail() {
    this.carService.GetCarsDetails().subscribe(response => {
      this.cars = response.data
      console.log(this.cars)
      console.log(this.cars[0].images)
    })
  }

}
