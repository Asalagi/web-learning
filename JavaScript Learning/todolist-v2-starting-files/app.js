const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
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

const item1 = new Item({
  name: "Step One: write task."
});

const item2 = new Item({
  name: "Step Two: Click + to add task to the list."
});

const item3 = new Item({
  name: "Step Three: Complete task and check the box."
});

const defaultItems = [item1, item2, item3];

app.get("/", function (req, res) {
  Item.find({})
    .then(foundItems => {
      if (foundItems.length === 0) {
        return Item.insertMany(defaultItems)
          .then(() => {
            console.log("Default items inserted successfully.");
            return defaultItems;
          });
      } else {
        console.log("Items were found");
        // console.log(foundItems);
        return foundItems;
      }
    })
    .then(items => {
      res.render("list", { listTitle: "Today", newListItems: items });
    })
    .catch(err => {
      console.log("There is an error:", err);
    });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;

  const item = new Item ({
    name: itemName
  });
  item.save();
  res.redirect("/"); 
});

app.post("/delete", function (req, res){
  const checkedItemId = req.body.checkbox;

  Item.findByIdAndRemove(checkedItemId)
  .then(() => {
    console.log("Item has been removed.");
  })
  .catch(err => {
    console.log("Item could NOT be removed.");
  });
  res.redirect("/");

});

app.get("/work", function (req, res) {
  const workItems = []; 
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
