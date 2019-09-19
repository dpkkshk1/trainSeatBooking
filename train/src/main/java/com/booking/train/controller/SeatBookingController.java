package com.booking.train.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.booking.train.model.Seat;
import com.booking.train.service.SeatService;


@RestController
public class SeatBookingController {
	@Autowired
	SeatService seatService;
	@GetMapping("/bookseats/{seats}")
	public ResponseEntity<?> getCount(@PathVariable int seats){
		try {
			List<Seat> bookedSeats=  seatService.bookSeats(seats);
			return new ResponseEntity<List<Seat>>(bookedSeats,HttpStatus.ACCEPTED);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<String>("{\"message\":\"All Seats Are Filled\"}",HttpStatus.CONFLICT);
		}
	}
	@GetMapping("/alreadybooked")
	public List<Seat> getAlreadyBooked(){
		return seatService.getAlreadyBookedSeats();
	}

}
