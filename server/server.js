var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {

  var todos = new Todo({
    text: req.body.text
  });

  todos.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  });
});



app.listen(3000, () => {
  console.log(`Listening on port`);
});
