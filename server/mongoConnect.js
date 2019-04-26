const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function (err) {
  if (err) { console.log(err) }
  console.log(`Connected to MongoDB`);
});

module.exports.client = client;

