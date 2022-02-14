import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  GetCarsDetails():Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(environment.apiUrl+"cars/getcarsdetails")
  }
  GetCarDetailsById(id:number):Observable<SingleResponseModel<CarDetailDto>>{
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(environment.apiUrl+"cars/getcardetailsbyid?id="+id)
  }
 
}
