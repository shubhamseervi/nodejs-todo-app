//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'shubham', age:22};
// var {name} = user;
// console.log(name);ls


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {

  if(error){
    console.log('Unable to connect to mongodb server');
  }
  console.log('connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('593f9235018e54e054bbd681')
  }, {
    $set: {
      name: 'shubham'
    },
    $inc: {
      age:1
    }
  }, {
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  })

  db.close();
});
