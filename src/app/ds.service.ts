import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DsService {
distDetails:[];
  constructor(private hc:HttpClient) { }
  readdata():Observable<any>{
    return this.hc.get<any>('https://api.covidindiatracker.com/state_data.json')
}
details(obj){
  this.distDetails=obj
}
}
