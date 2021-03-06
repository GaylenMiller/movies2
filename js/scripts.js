function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
}


Ticket.prototype.finalPrice = function() {
  var regPrice = 10

  if (this.time === "2:00") {
    if (this.age === "youth") {
      return regPrice - 6;
    }
    else if (this.age === "student" || this.age === "senior") {
      return regPrice-4;
    }
    else {
      return regPrice - 1;
    }
  }
  else if (this.time === "8:00") {
    if (this.age === "youth") {
      return regPrice - 4;
    }
    else if (this.age === "student" || this.age === "senior") {
      return regPrice-2;
    }
    else {
      return regPrice + 1;
    }
  } else {
    if (this.age === "youth") {
      return regPrice - 5;
    }
    else if (this.age === "student" || this.age === "senior") {
      return regPrice - 3;
    }
    else {
      return regPrice;
    }
  }
}


$(document).ready(function() {

  $("form#ticket-purchase").submit( function(event){
    event.preventDefault();
    debugger;
    var movies = $('#movie').val();
    var age = $('#age').val();
    var time = $('#time').val();

    var tickets = new Ticket(movies, age, time);
    var finalPrice = tickets.finalPrice();
    console.log("created tickets");
  });

});
