
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0){
        res.send("<h1>Have a great weekend!</h1>");
    } else {
        res.send("<h1>Hope the rest of your week goes well.<h1/>");
    }
});

app.listen(3000, function(){
    console.log("Server is up on port 3000");
});