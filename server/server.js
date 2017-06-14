var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// middleware to parse incoming request bodies before handlers
app.use(bodyParser.json());

 // POST request
app.post('/todos', (req, res) => {

  // newing up todos and assigning POST response
  var todos = new Todo({

    //bodyParser: avaiable in body.
    text: req.body.text
  });

// presist to mongodb
  todos.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    // sending back the error block in response
    res.send(e);
  });
});



app.listen(3000, () => {
  console.log(`Listening on port`);
});


module.exports = {app};
