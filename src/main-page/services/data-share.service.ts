import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private dataSource = new ReplaySubject<any>()
  currentData=this.dataSource.asObservable()
  constructor() { }
  updateData(data:any){
    this.dataSource.next(data)
  }
}
