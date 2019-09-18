import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  constructor(private bookingService:BookingserviceService,private route:Router) { }
  seats:number;
  bookedSeats:any;
  ngOnInit(): void {

  }
  bookSeats(){
    this.bookingService.bookseats(this.seats).subscribe((res)=>{
      console.log(res);
      this.bookedSeats = res;
      this.bookingService.invokeEvent.next(this.bookedSeats);
      this.route.navigate(["/seatmap"]);
    })
  }
}
