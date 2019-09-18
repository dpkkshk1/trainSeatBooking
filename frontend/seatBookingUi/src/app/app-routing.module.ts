import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatsComponent } from './seats/seats.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  {
    path:"seatmap",
    component:SeatsComponent
  },
  {
    path:"",
    component:BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
