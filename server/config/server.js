const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const app = express();

const PORT = 3001;
app.use(cors());
app.use(express.json());

//route to get all posts
app.get('/api/get', function (req, res) {
  db.query('select * from posts', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//route to one post
app.get('/api/getFromId/:id', (req, res) => {
  const id = req.params.id;
  db.query('select * from posts where id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//route for creating the post
app.post('/api/create', (req, res) => {
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  console.log(username, title, text);

  db.query('insert into posts (title, post_text, user_name) values (?,?,?)', [title, text, username], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});

//route for update the post
app.post('/api/update/:id', (req, res) => {

  const id = req.params.id;
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  console.log(username, title, text);

  db.query(`update posts set user_name = '${username}', post_text = '${text}', title = '${title}' where id = ?`, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});

//route for like
app.post('/api/like/:id', (req, res) => {
  const id = req.params.id;
  db.query('update posts set likes = likes + 1 where id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});

//route to delete a posts
app.delete('/api/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('delete from posts where id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
