/*let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.7.0";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});*/

const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.7.0";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully!");
    
    // Optional: verify with ping
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged MongoDB.");
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await client.close();
  }
}

run();