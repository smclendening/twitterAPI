const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname + '/../client/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/tweets', (req, res) => {
  console.log(req.query);
  res.end();
})

app.listen(port, () => {
  console.log('dir', __dirname);
});