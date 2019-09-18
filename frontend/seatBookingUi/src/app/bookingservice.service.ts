import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  constructor(private _http: HttpClient) { }
  public invokeEvent:Subject<any> = new Subject();
  alreadyBookedSeats(){
    return this._http.get("/api/alreadybooked");
  }
  bookseats(seats:number){
    return this._http.get("/api/bookseats/"+seats);
  }
}
