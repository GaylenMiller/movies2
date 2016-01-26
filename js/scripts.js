function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;

  var ticket = [movie, age, time]
};

prototype function { age.price + time.price } 

function Age(youth, student, adult, senior) {
  this.youth = youth;
  this.student = student;
  this.adult = adult;
  this.senior = senior;
};

// Movies Object
var movie1 = { name: "Homeward Bound"};
var movie2 = { name: "The Martian"};
var movie3 = { name: "Groundhog Day"};

var movies = { selection: [movie1, movie2, movie3] };

// Age Group Object
var youth = { age: "youth", price: 3.50 };
var student = { age: "student", price: 6.50 };
var adult = { age: "adult", price: 100.00 };
var senior = { age: "senior", price: 6.50 };

var age = { groups: [youth, student, adult, senior] };

//Time Selections
var matinee = {time: "2:00PM" price: -1.00};
var afternoon = {time: "4:30PM"};
var evening = {time: "8:00PM"};

var time = { times: [matinee, afternoon, evening] };








$(document).ready(function() {
$("form#ticket-purchase").submit(function(event){
  event.preventDefault();

  var movies = $('#movie').val();
  var age = $('#age').val();
  var time = $('#time').val();
  var tickets = new Ticket(movies, age, time);

  tickets.forEach(function(ticket) {
    tickets.age
  });

});
});
