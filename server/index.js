const express = require('express');
const path = require('path');
const request = require('request-promise');
const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname + '/../client/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/tweets', (req, res) => {
  
  const options = {
    uri: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
    screen_name: 'AaronRodgers12',
    count: 10
  }

  request(options)
    .then(tweets => {
      res.end(tweets);
    })
    .catch(err => {
      console.log('error', err);
      res.end();
    })
})

app.listen(port, () => {
  console.log('dir', __dirname);
});