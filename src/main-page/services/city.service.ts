import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { environment } from 'src/environments/environment';
import { City } from '../models/cityModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<City>>{
    return this.httpClient.get<ListResponseModel<City>>(environment.apiUrl+"cities/getall")
  }

}
