prompt("What is your name?");
prompt("What is their name?");

var love = Math.random() * 100;
love = Math.floor(love) + 1;
alert("You are a " + love + "% match!");

// using if else

prompt("What is your name?");
prompt("What is their name?");

var love = Math.random() * 100;
love = Math.floor(love) + 1;

if (love > 70){ 
   alert("You got a " + love + "% score! Your future looks to be bright and happy!");
} else {
    alert("You got a " + love + "% score. Maybe you should seek out other options. Perhaps a cat.");
}
