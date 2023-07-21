const { MongoClient, ServerApiVersion } = require("mongodb");
const assert = require("assert");

const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  let db;

  try {

    await client.connect();

    db = client.db("fruitsDB").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {

    insertDocuments(db, function(){
      client.close();
    });
  }
}
const insertDocuments = function(db, callback) {
  const collection = db.collection('fruits');

  collection.insertMany([
      {
          name: "Apple",
          score: 8,
          review: "Apple a day keeps the doctor away"
      },
      {
          name: "Orange",
          score: 1,
          review: "Yuck"
      },
      {
          name: "Banana",
          score: 5,
          review: "Keeps my potassium up"
      }
  ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.insertedCount);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
  });
};

run().catch(console.dir);

