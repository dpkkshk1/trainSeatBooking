import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  constructor(private _http: HttpClient) {
   }
  bookedprevious:any;
  bookednow:any;
  //private dataSource = new BehaviorSubject<any>(this.bookedprevious);
  alreadyBookedSeats():any{
    return this._http.get("/api/alreadybooked");
  }

  bookseats(seats:number){
    return this._http.get("/api/bookseats/"+seats);
  }
  setCurrentlyBokedSeats(alreadyBookedSeats:any){
    this.bookednow = alreadyBookedSeats;
  }
  getCurrentlyBookedSeats(){
    this.bookednow;
  }
  setPreviouslyBookedSeats(bookedprevious:any){
    this.bookedprevious = bookedprevious;
  }
  getPreviouslyBookedSeats(){
    return this.bookedprevious;
  }
}
