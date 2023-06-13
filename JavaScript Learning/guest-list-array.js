function welcomeWagon(guestList){
    var guestList = ["Dennis", "Maria", "Allie", "Cortney", "Joe", "Levi", "Daisy", "Miah", "Titus"];
    if (guestList.includes(yourName)) {
        alert("Welcome!");
    } else {
        alert("Go away!");
    } 
}

var yourName = prompt("Please, type your name.");
welcomeWagon(yourName);