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

    db.collection('Todos').deleteMany({text: 'something here is  and you read it.'}).then((result) => {
      console.log(result);
    });

    db.collection('Todos').deleteOne({text: 'something here is  and you read it.'}).then((result) => {
      console.log(result);
    });


    db.collection('Users').deleteMany({name: 'shubham seervi'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("593f9234201085e04bed7631")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

    db.close();
});
