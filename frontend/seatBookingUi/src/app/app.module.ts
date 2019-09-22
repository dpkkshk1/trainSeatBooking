import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatsComponent } from './seats/seats.component';

import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component'; 
import { BookingserviceService } from './bookingservice.service';
import { DataServiceService } from './booking/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SeatsComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [BookingserviceService,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
