// solution
function beer() {
    var numberOfBottles = 99
    while (numberOfBottles >= 0) {
        var bottleWord = "bottle";
        if (numberOfBottles === 1) {
            bottleWord = "bottles";
        } 
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
    }
    
    beer();

// bottles of beer GPT refined(previous throwing -1 at the end)
function beer() {
    var bottles = 99;
  
    while (bottles >= 0) {
      var bottleWord = "bottles";
      if (bottles === 1) {
        bottleWord = "bottle";
      }
  
      console.log(bottles + " " + bottleWord + " of beer on the wall, " +
        bottles + " " + bottleWord + " of beer." +
        "Take one down, pass it around, ");
  
      bottles--;
  
      if (bottles >= 0) {
        bottleWord = (bottles === 1) ? "bottle" : "bottles";
        console.log(bottles + " " + bottleWord + " of beer on the wall.");
      } else {
        console.log("No more bottles of beer on the wall.");
      }
    }
  }
  
  beer();