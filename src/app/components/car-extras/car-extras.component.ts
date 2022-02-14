import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';
import { environment } from 'src/environments/environment';
import { CarService } from 'src/main-page/services/car.service';

@Component({
  selector: 'app-car-extras',
  templateUrl: './car-extras.component.html',
  styleUrls: ['./car-extras.component.css']
})
export class CarExtrasComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private carService:CarService) { }
  carDetail:CarDetailDto
  baseUrl =environment.imageBase
  loading=true
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      if (param['carId']) {
        this.getCarDetailsById(param['carId'])
      }
    })
  }
  getCarDetailsById(id:number){
    this.carService.GetCarDetailsById(id).subscribe(responose=>{
      this.carDetail=responose.data
      console.log(this.carDetail)
      this.loading=false
    })
  }
}
