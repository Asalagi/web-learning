
const { MongoDBCollectionNamespace } = require('mongodb');
const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/fruitsDB';

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB")
.then(() => {
  console.log('You successfully connected to MongoDB using Mongoose!');
  findFruits();
})
.catch(err => {
  console.error('Error connecting to MongoDB using Mongoose:', err);
  process.exit(1); // Exit the process with a non-zero exit code to indicate an error
});

  const fruitSchema = new mongoose.Schema({
    name: String,
    score: {
      type: Number,
      min: 1,
      max: 10
    },
    review: String
  });
  
  const Fruit = mongoose.model('Fruit', fruitSchema);

  const fruits = [
    { name: 'Pear', score: 8, review: "sweet!"},
    { name: 'Kiwi', score: 1, review: 'Too fuzzy' },
    { name: 'Banana', score: 5, review: 'Good when there is nothing else to eat' },
    { name: 'Strawberry', score: 10, review: 'So sweet and delicious' },
    { name: 'Peach', score: 1, review: 'meh' }
  ];

  const orange = new Fruit({
    name: "Orange",
    score: 2,
    review: "too sour"
  });

  // Fruit.insertMany(fruits);
  // console.log("inserted many fruits");
  orange.save();
  console.log('Inserted 1 document into the collection');

  async function findFruits() {
    try {
      const fruits = await Fruit.find().select('name');
      console.log('Found fruits:');
      fruits.forEach(fruit => console.log(fruit.name));
    } catch (err) {
      console.error('Error finding fruits:', err);
    } finally {
      mongoose.connection.close();
      console.log('Connection to MongoDB closed.');
      process.exit(0); // Exit the process with a zero exit code to indicate success
    }
  }