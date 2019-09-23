package com.booking.train.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.booking.train.exception.SeatException;
import com.booking.train.model.Seat;
import com.booking.train.repository.SeatRepository;

@Service
public class SeatService {
	@Autowired
	SeatRepository seatRepository;
	public List<Seat> bookSeats(int seats) throws Exception{
		//get Seats Already booked from database
		List<Seat> seatList = seatRepository.findAll();
		
		int seatmap[] = new int[81];
		int rowmap[] = new int[13];
		for (Seat seat : seatList) {
			seatmap[seat.getSeatno()] = 1;
		}
		int rowcount = 0;
		for (int i = 1; i <= 80; i++) {
			if (seatmap[i] == 0) {
				rowcount++;
			}
			if (i % 7 == 0) {
				rowmap[i / 7] = rowcount;
				rowcount = 0;
			} else if (i > 77) {
				rowmap[12] = rowcount;

			}
		}
		List<Seat> bookedSeats = new ArrayList<>();
		int singleRow = 0;
		for (int i = 1; i < 13; i++) {
			if (seats <= rowmap[i]) {
				for (int j = 1; j <= seats; j++) {
					Seat seatrow = new Seat();
					seatrow.setSeatno(((7 - rowmap[i]) + 7 * (i - 1)) + j);
					bookedSeats.add(seatrow);

				}
				i = 14;
			}
			if (i == 12) {
				singleRow = 1;
			}
		}
		
		//if seats are not avaible in single row , then find minimum subset of row in which seat booking is possible
		if (singleRow == 1) {
			
			int start = 0;
			int endingRow = 0; // ending row in booking subarray
			int startingRow = 0; //Starting row in booking subarray
			int totalSeats = 0; //available seats sum in subarray
			int minimumRows = rowmap.length; // minimum no of rows in subarray
			
			for (int i = 0; i <= rowmap.length; i++) {
				while (totalSeats >= seats) {
					totalSeats = totalSeats - rowmap[start];
					if (i - start <= minimumRows) {
						minimumRows = (i - start);
						endingRow = i;
						startingRow = start;
					}
					start++;
				}
				if (i < rowmap.length) {
					totalSeats = totalSeats + rowmap[i];
				}
			}
			
			//getting seat no for booking
			
			for (int i = startingRow; i < endingRow; i++) {
				for (int j = 1; j <= rowmap[i]; j++) {
					Seat seatrow = new Seat();
					if (i == 12) {
						seatrow.setSeatno(((3 - rowmap[i]) + 7 * (i - 1)) + j);
					} else {
						seatrow.setSeatno(((7 - rowmap[i]) + 7 * (i - 1)) + j);
					}
					bookedSeats.add(seatrow);
					seats--;
					if (seats == 0) {
						j = rowmap[i] + 1;
					}
				}
			}

		}
		if(bookedSeats.isEmpty()) {
			System.out.println("error in creatting");
			throw new SeatException("Already Booked");
		}
		bookedSeats = seatRepository.saveAll(bookedSeats);
		for (Seat seat : bookedSeats) {
			System.out.print(seat.getSeatno());
		}
		return bookedSeats;
	}
	
	
	public List<Seat> getAlreadyBookedSeats(){
		return seatRepository.findAll();
	}

}
