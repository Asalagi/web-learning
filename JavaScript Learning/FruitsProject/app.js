const { MongoClient, ServerApiVersion } = require("mongodb");
const assert = require("assert");

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");

    const db = client.db("fruitsDB");

    await db.command({ ping: 1 });

    // Call the insertDocuments function and use async/await to ensure it finishes before closing the client
    await insertDocuments(db);

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    client.close();
    console.log("Connection to MongoDB closed.");
  }
}

const insertDocuments = async function (db) {
  const collection = db.collection("fruits");

  try {
    const result = await collection.insertMany([
      {
        name: "Apple",
        score: 8,
        review: "Apple a day keeps the doctor away",
      },
      {
        name: "Orange",
        score: 1,
        review: "Yuck",
      },
      {
        name: "Banana",
        score: 5,
        review: "Keeps my potassium up",
      },
    ]);

    assert.equal(3, result.insertedCount);
    
    if (result.ops) {
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
    } else {
      console.log("No documents were inserted.");
    }
  } catch (err) {
    console.error("Error inserting documents:", err);
  }
};

run().catch(console.dir);
