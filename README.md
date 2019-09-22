# trainSeatBooking

App Description :-

In this app a user can book seats in a train and if setas are available it will book the seats in best possile proximity.

DataBase :- There is one table in our database which is seat which will be storing the booked seats.

Back-end:- In backed i have used java and spring boot which is checking for the available seats and if available then it will book the seats.

frontend:- In front i have used angular it has two components booking whcih will ask user to  provide no of seats he wants to book and seats component which will show the current status of coach.

Sowtware Requirements :- 
  1. Java 1.8
  2. Visual Studio Code
  3. Eclipse/ Spring tool suit
  4.Mysql 5
  
  Clone this repo into your system and make sure you have softwares that are required.
  
How to run app :-

  Database :-
  
  1. open your mysql command line and login with your password
  
  2.create database train
  
  3.use database
  
  Backend :-
  
  1.import project in you eclipse/sts using import->maven->existing maven project->browse->select train folder
  
   2. go to src/resource folder and open application.properties
  
  3. change spring.datasource.username="your database username" 
  
  4. change spring.datasource.password= "your database password"
  
  5.open src->right click trainseeatapplicatoion->run->run as java application
  
  frontend :-
  
  1. open command promt and change directory to ./trainSeatBooking/frontend/SeatBookingUi 
  
  2. type in cmd:-  npm start
  
  Assumptions:-
  
  1.A user will provide booking seat count less than or equal to 7.
