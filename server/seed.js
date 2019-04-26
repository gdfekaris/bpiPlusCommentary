const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });
const dbName = 'bpiPlus';
const dbCollection = 'commentary';
const { dummyData } = require('./dummyData.js');

module.exports = () => {
  client.connect(function(err) {
    if (err) { return console.log(err) }
    const db = client.db(dbName);
    const collection = db.collection(dbCollection);

    console.log('seed script connected to Mongo');

    for (let i = 0; i < dummyData.commentary.length; i++) {
      collection.insertOne(dummyData.commentary[i]);
      console.log('record added');
    }
  })
}

require('make-runnable/custom')({
  printOutputFrame: false
});