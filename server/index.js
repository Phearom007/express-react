const express = require('express');
const { db } = require('./config/db');
const cors = require('cors');

const routeBlog = require("./routes/blog");
const sequelizeDb = require("./models");

const app = express();

const PORT = 8081;

sequelizeDb.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: "Welcome to Express Application." });
});

// route to get all product
app.get('/api/getProducts', function (req, res) {
  // db.query('select * from products where published = 1 order by id desc', (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.send(result);
  // });
});

app.use("/api/blog", routeBlog);

app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});




// create, update, delete, show, list - product
// create, update, delete, show, list - product
// create, update, delete, show, list - product
// create, update, delete, show, list - product
// create, update, delete, show, list - product