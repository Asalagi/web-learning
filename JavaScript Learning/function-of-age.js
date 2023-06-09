function myTimeLeft(myYears) {   
    var years = 90 - myYears;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;
    console.log("You have " + years + " years left, or " 
    + months + " months left, or " + weeks + " weeks left, or " 
    + days + " days left");
  }

  myTimeLeft(56);