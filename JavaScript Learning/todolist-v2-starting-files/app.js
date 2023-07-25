//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB")
  .then(() => {
    console.log("You have connected successfully to Mongoose.");
  })
    .catch(err => {
      console.log("There has been an error.");
  });

  const itemsSchema = {
    name: String
  };

  const Item = mongoose.model("Item", itemsSchema);

  const item1 = new Item ({
    name: "Step One: write task."
  });

  const item2 = new Item ({
    name: "Step Two: Click + to add task to the list."
  });

  const item3 = new Item ({
    name: "Step Three: Complete task and check the box."
  });

  const defaultItems = [item1, item2, item3];

  Item.insertMany(defaultItems)
    .then (() => {
      console.log("many items were successfully inserted");
    })
    .catch(err => {
      console.log("an eror occured and nothing has been inserted");
    });


const workItems = [];

app.get("/", function(req, res) {

  res.render("list", {listTitle: "Today", newListItems: defaultItems});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
