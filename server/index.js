const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const app = express();

const PORT = 8081;

app.use(cors());
app.use(express.json());

// route to get all product
app.get('/api/getProducts', function (req, res) {
  db.query('select * from products where published = 1 order by id desc', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
