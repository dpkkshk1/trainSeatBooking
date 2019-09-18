package com.booking.train.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.booking.train.model.Seat;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer>{

}
