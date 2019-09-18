import { Component } from '@angular/core';
import { BookingserviceService } from './bookingservice.service';
import { Router } from '@angular/router';
import { Seat } from './seats/Seat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seatBookingUi';
  constructor(private bookingService:BookingserviceService,private route:Router) { }
  seats:number;
  bookedSeats:any;
  bookSeats(){
    this.bookingService.bookseats(this.seats).subscribe((res)=>{
      console.log(res);
      this.bookedSeats = res;
      this.bookingService.invokeEvent.next(this.bookedSeats);
      this.route.navigate(["/seatmap"]);
    })
  }

}
