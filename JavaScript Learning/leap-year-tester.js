function isLeap(year) {
  
    if (year % 4 === 0) {
        console.log("Leap year.");
        } else if (year % 100 !== 0) {
        console.log("Not leap year.");
        } else if (year % 400 === 0) {
        console.log("Leap year.");
        } 
     return year;
      
    }
    
    isLeap(2024);

// corrected and with short hand

function isLeap(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        return "leap year."
    } else {
        return "not a leap year."
    }
}

isLeap(1700);