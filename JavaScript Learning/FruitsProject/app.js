
const { MongoDBCollectionNamespace } = require('mongodb');
const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/fruitsDB';

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

  const fruitSchema = new mongoose.Schema({
    name: String,
    score: Number,
    review: String
  });
  
  const Fruit = mongoose.model('Fruit', fruitSchema);

  // const pear = new Fruit ({
  //   name: "Pear",
  //   score: 8,
  //   review: "sweet!"
  // });

  const kiwi = new Fruit ({
    name: "Kiwi",
    score: 1,
    review: "too fuzzy"
  });

  const banana = new Fruit ({
    name: "Banana",
    score: 5,
    review: "Good when there is nothing else to eat"
  });

  const strawberry = new Fruit ({
    name: "Strawberry",
    score: 10,
    review: "so sweet and delicious"
  });

  // const personSchema = new mongoose.Schema({
  //   name: String,
  //   age: Number,
  //   state: String
  // });
  
  // const Person = mongoose.model('Person', personSchema);
  // const person = new Person ({
  //   name: "Jerry",
  //   age: "32",
  //   state: "Oklahoma"
  // });

  // person.save();

  Fruit.insertMany([kiwi, banana, strawberry], function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("many fruits were inserted");
    }
  });
  // fruit.save();
  // console.log('Inserted 1 document into the collection');