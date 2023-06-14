// function groomQuote() {
//   var dogWeight = prompt("How many pound is your dog?");
//   // var dogCoat = prompt("Is your dogs coat long, medium, or short?")
//   // var dogVolume = prompt("If your dogs coat type long-thick, medium-thick, or short-slick?");
//   // var dogLastGroom = prompt("How many months since your dog was last groomed?");
//   // var dogAge = prompt("How old is your dog?");

//   if(dogWeight <= 12) {
//       alert("Your dog will cost between $75-$95 for grooming service.");
//   } else if (dogWeight >= 12 && dogWeight <= 30) {
//       alert("Your dog will cost between $95-$120 for grooming service.");
//   } else if (dogWeight >= 30 && dogWeight <= 50) {
//       alert("Your dog will cost between $120-$150 for grooming service.");
//   } else {
//      alert("I'm sorry your dog is out of our weight limit.");
//   }

//   return dogWeight;
// }

// groomQuote();


function dogWeightCost() {
    var cost = 5;
    var dog = prompt("How many pounds does your dog weigh?");
  
    while (dog > 0) {
      cost++;
      dog--;
    }
  
    alert("Your dog's cost will be $" + cost + ".");
  }
  
  dogWeightCost();