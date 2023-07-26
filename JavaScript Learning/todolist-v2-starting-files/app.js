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

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

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

app.get("/:customList", function(req, res){
  let customList = (req.params.customList);

  List.findOne({ name: customList })
    .then(foundList => {
      if (foundList) {
        console.log("List exists:", foundList.name);
        return foundList;
      } else {
        const list = new List({
          name: customList,
          items: defaultItems
        });
        return list.save();
      }
    })
    .then(list => {
      res.render("list", { listTitle: list.name, newListItems: list.items });
    })
    .catch(err => {
      console.log("There is an error:", err);
    });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item ({
    name: itemName
  });

  if (listName === "Today"){
    item.save();
    res.redirect("/"); 
  } else {
    List.findOne({ name: listName })
      .then(foundList => {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId)
      .then(() => {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      })
      .catch(err => {
        console.log("Error deleting checked item:", err);
        res.redirect("/");
      });
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } },
      { useFindAndModify: false }
    )
      .then(foundList => {
        if (foundList) {
          console.log("Item has been removed from custom list:", foundList.name);
          res.redirect("/" + listName);
        } else {
          console.log("Custom list not found.");
          res.redirect("/");
        }
      })
      .catch(err => {
        console.log("Error removing item from custom list:", err);
        res.redirect("/");
      });
  }
});



app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});