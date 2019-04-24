const express = require('express');
const helmet = require('helmet');
const request = require('request');
const { dataCleanup } = require('./util');
const { dummyData }  = require('./dummyData');

const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
  console.log(req.body);
  res.send();
});

app.get('/commentary', (req, res) => {
  //build db to fetch/request commentary JSON obj from

  res.send(dummyData);
})

const DEFAULT_PORT = 3000;
const PORT = DEFAULT_PORT;

app.listen(PORT, () => {
  console.log(`lisening on ${PORT}`);
});