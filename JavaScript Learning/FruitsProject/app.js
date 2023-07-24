
const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/fruitsDB';

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

  const fruitSchema = new mongoose.Schema({
    name: String,
    score: Number,
    review: String
  });
  
  const Fruit = mongoose.model('Fruit', fruitSchema);

  const fruit = new Fruit ({
    name: "Apple",
    score: 7,
    review: "Crunchy and sweet!"
  });
  
  fruit.save();
  console.log('Inserted 1 document into the collection');
  mongoose.connection.close();
  process.exit(0);