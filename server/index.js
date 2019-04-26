const express = require('express');
const helmet = require('helmet');
const request = require('request');
const cors = require('cors');
const mongo = require('./mongoConnect.js');
const { dataCleanup, lastTenComments, authorizePost } = require('./util');
const { dummyData }  = require('./dummyData');

const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//app.use(express.static('./public'));

app.get('/bpi', (req, res) => {
  request(
    `https://api.coindesk.com/v1/bpi/historical/close.json?index=[USD]`,
    { json: true },
    (err, response, body) => {

      if (err) return console.log(err);

      res.send(dataCleanup(body));
    });
});

app.get('/current', (req, res) => {
  request(
    `https://api.coindesk.com/v1/bpi/currentprice/USD.json`,
    { json: true },
    (err, response, body) => {

      if (err) return console.log(err);

      res.send(body);
    });
});

app.post('/postCommentary', (req, res) => {
  if (authorizePost(req.body.key)) {
    console.log(req.body);
    mongo.client.connect((err) => {
      if (err) {
        return console.log(err)
      } else {
        console.log('Connected to MongoDB');
        const db = mongo.client.db(`bpiPlus`);
        const commentary = db.collection(`commentary`);

        commentary.insertOne(req.body);
        res.send();
      }
    })
    //res.send();
  } else {
    console.log('unauthorized post');
    res.status(400).send('Bad Request');
  }
});

app.get('/commentary', (req, res) => {
  //build db to fetch/request commentary JSON obj from
  mongo.client.connect((err) => {
    if (err) {
      return console.log(err)
    } else {
      console.log('Connected to MongoDB');

      const db = mongo.client.db(`bpiPlus`);
      const commentary = db.collection(`commentary`);

      new Promise ((resolve, reject) => {
        commentary.find().sort({ _id: -1 }).limit(10)
          .toArray((err, docs) => {
            if (err) {
              console.log(err);
              res.status(500).end();
            } else {
              resolve(docs);
            }
          })
      }).then((data) => {
        console.log(data);
        res.status(200).send(data);
      })
    }
  })
  //res.send(lastTenComments(dummyData.commentary));
})

const DEFAULT_PORT = 3000;
const PORT = DEFAULT_PORT;

app.listen(PORT, () => {
  console.log(`lisening on ${PORT}`);
});



// app.get('/username', (req, res) => {
//   mongo.client.connect((err) => {
//     const db = mongo.client.db(`menu-bar-data`);
//     const users = db.collection(`users`);
//     if (err) {
//       console.log(err);
//       res.status(500).end();
//     } else {
//       console.log('GET api called')
//     }

//     new Promise((resolve, reject) => {
//       users.find({}, { "limit": 100, "skip": 9999900 })
//         .toArray((err, docs) => {
//           if (err) {
//             console.log(err);
//             res.status(500).end();
//           } else {
//             resolve(docs);
//           }
//         })
//     })
//       .then((data) => res.status(200).send(JSON.stringify(data)))
//       .then(() => console.log('GET API complete'));
//   })
// });


// app.post(`/createProfile`, (req, res) => {
//   mongo.client.connect((err) => {
//     const db = mongo.client.db(`menu-bar-data`);
//     const users = db.collection(`users`);
//     if (err) {
//       console.log(err);
//       res.status(500).end();
//     } else {
//       console.log('POST api called')
//     }

//     new Promise((resolve, reject) => {
//       users.insertOne(req.body, (err, r) => {
//         assert.equal(null, err);
//         resolve(assert.equal(1, r.insertedCount));
//       })
//     })
//       .then(() => res.status(200))
//       .then(() => mongo.client.close(console.log('POST API complete')));
//   })
// })
