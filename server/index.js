const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiMetrics = require('prometheus-api-metrics');
const db = require('./mongoModel');

const app = express();

const port = process.env.PORT || 3003;
app.use(apiMetrics());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use('/homes/:id', express.static(path.join(__dirname, '../public/dist')));

app.get('/homes/:id/nearbyHomes', (req, res) => {
  const { id } = req.params;
  db.retrieve(id, (err, data) => {
    if (err) {
      res.en(err);
    } else {
      res.end(JSON.stringify(data));
    }
  });
});


app.post('/homes/:id/nearbyHomes', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});

//curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:3003/homes/:id/nearbyHomes {name: "mona" datetime:, status, likes, bathrooms, bedrooms, price, sqft, street, city, state, zipCode, latitude, longitude, image}