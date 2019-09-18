package com.booking.train.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="seat")
public class Seat {

	@Id
	@Column(name="seatno")
	private int seatno;

	public Seat() {
		super();
	}

	public Seat(int seatno) {
		super();
		this.seatno = seatno;
	}

	public int getSeatno() {
		return seatno;
	}

	public void setSeatno(int seatno) {
		this.seatno = seatno;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + seatno;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Seat other = (Seat) obj;
		if (seatno != other.seatno)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Seat [seatno=" + seatno + "]";
	}
	
	
}
