const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://shahdeep020:lFQyqwvO9nPG4nuA@cluster0.jgma8wa.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db('shop');
      callback();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw "No database found!";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
