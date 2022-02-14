import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { environment } from 'src/environments/environment';
import { Branch } from '../models/branchModel';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Branch>>{
    return this.httpClient.get<ListResponseModel<Branch>>(environment.apiUrl+"branches/getall")
  }
  getByCityId(cityId:number):Observable<ListResponseModel<Branch>>{
    return this.httpClient.get<ListResponseModel<Branch>>(environment.apiUrl+"branches/getbycityid?cityId="+cityId)
  }
}
