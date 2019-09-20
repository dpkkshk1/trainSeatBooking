import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { Router } from '@angular/router';
import { Seat } from '../seats/Seat';
import { DataServiceService } from './data-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  constructor(private bookingService:BookingserviceService,private route:Router,private dataService:DataServiceService) { this.seat.fill(0); }
  seats:number;
  currentBookedSeats:any;
  alreadyBookedSeats:any;
  seat = Array<number>(80);
  ngOnInit(): void {
    localStorage.clear();
    this.bookingService.alreadyBookedSeats().subscribe((res:Seat)=>{
      this.alreadyBookedSeats = res;
      this.alreadyBooked1();
    })
  }
  bookSeats(){
    if(this.seats>7||this.seats==0)
    {
      alert("Please enter valid no seats your want to book it should be in range of 1 to 7");

    }else{
    this.bookingService.bookseats(this.seats).subscribe((res)=>{

      this.currentBookedSeats = res;
      this.currentlyBooked();
      this.dataService.changeSeatStatus(this.seat);
      this.route.navigate(["/seatmap"]);
    },(error:HttpErrorResponse)=>{
      alert("Seats are full");
    })}
  }
  currentlyBooked(){
    for (let index = 0; index < this.currentBookedSeats.length; index++) {
        this.seat[this.currentBookedSeats[index].seatno-1]=2;
    }
  }
  alreadyBooked1(){
    for (let index = 0; index < this.alreadyBookedSeats.length; index++) {
        this.seat[this.alreadyBookedSeats[index].seatno-1]=1;
    }
  }
}
