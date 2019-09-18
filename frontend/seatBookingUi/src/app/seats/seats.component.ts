import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  constructor(private bookingService:BookingserviceService) { }
currentbookedSeats:any;
alreadybookedSeats:any;
  ngOnInit() {
    this.bookingService.invokeEvent.subscribe((res)=>{
      this.currentbookedSeats = res;
      console.log(this.currentbookedSeats);
    })
    this.bookingService.alreadyBookedSeats().subscribe((res)=>{
      this.alreadybookedSeats= res;
      console.log(this.alreadybookedSeats);
    })
  }

}
