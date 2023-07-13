
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunnudagr";
            break;
        case 1:
            day = "Manadagr";
            break;
        case 2:
            day = "Tysdagr";
             break;
        case 3:
            day = "Odinsdagr";
            break;
        case 4:
            day = "Thorsdagr";
            break;
        case 5:
            day = "Frjadagr";
            break;
        case 6: 
            day = "Laugardagr";
            break;
            default:
                console.log("Error today is " + currentDay);
    }
    res.render("list", {kindOfDay: day})
});

app.listen(3000, function(){
    console.log("Server is up on port 3000");
});