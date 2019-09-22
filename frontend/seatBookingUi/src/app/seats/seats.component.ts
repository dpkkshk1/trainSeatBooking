import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from '../booking/data-service.service';



@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    localStorage.clear();
  }

  constructor(private dataservice:DataServiceService) {}

seat = Array<number>(80);
my:any;
seatmap = Array<any>();
  ngOnInit() {
    
  this.dataservice.currentSeatStatus.subscribe(res=>{
    if(res!=0){
      console.log(res);
    localStorage.setItem("data",JSON.stringify(res));
  }
  });
  this.seat = JSON.parse(localStorage.getItem('data'));
  this.divideseats();
  }
  divideseats(){
    for (let index = 0; index < this.seat.length; index += 7) {
     let mychunk = this.seat.slice(index,index+7);
      this.seatmap.push(mychunk);
    }
    console.log(this.seatmap);
  }
}
