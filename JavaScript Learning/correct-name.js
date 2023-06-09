var name = prompt("What is your name?");
var startName = name.slice(0,1).toUpperCase();
var restName = name.slice(1).toLowerCase();
var finishedName = startName + restName;
alert("Hello " + finishedName);