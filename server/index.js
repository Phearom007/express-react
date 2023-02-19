const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const busboy = require("busboy");
const { v4: uuid } = require("uuid");

const { db } = require("./config/db");
const routeBlog = require("./routes/blog");
const sequelizeDb = require("./models");

const app = express();

const PORT = 8081;

const filesLocoation = path.join(__dirname, "/public/upload/");

sequelizeDb.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express Application." });
});

// route to get all product
app.get("/api/getProducts", function (req, res) {
  // db.query('select * from products where published = 1 order by id desc', (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.send(result);
  // });
});

app.post("/api/upload", (req, res) => {
  const bb = busboy({ headers: req.headers });

  let name = "";

  bb.on("file", (name, file, info) => {
    const { filename, encoding, mimeType } = info;

    console.log(
      `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
      filename,
      encoding,
      mimeType
    );
    name = uuid() + "-" + filename;
    const saveTo = path.join(filesLocoation + name);
    file.pipe(fs.createWriteStream(saveTo));

    bb.on("close", () => {
      // res.writeHead(200, { Connection: "close" });
      // res.end('closed');
      res.status(200).json({
        name,
        message: 'uploaded'
      });
    });
  });

  return req.pipe(bb);
});

app.use("/api/blog", routeBlog);

app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});