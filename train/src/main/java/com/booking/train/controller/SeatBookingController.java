package com.booking.train.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public List<Seat> getCount(@PathVariable int seats){
		return seatService.bookSeats(seats);
	}
	@GetMapping("/alreadybooked")
	public List<Seat> getAlreadyBooked(){
		return seatService.getAlreadyBookedSeats();
	}

}
