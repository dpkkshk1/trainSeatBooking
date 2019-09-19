import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  private seatStatus = new BehaviorSubject<any>(0);
  currentSeatStatus = this.seatStatus.asObservable();
  changeSeatStatus(seatStatus:any){
    this.seatStatus.next(seatStatus);
  }
  
}
