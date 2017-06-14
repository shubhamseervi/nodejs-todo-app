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

    db.collection('Todos').find({
      _id: new ObjectID('593e867a43f92dba515f2560')
    }).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch the todos', err);
    });

     

    db.collection('Todos').find().toArray().then((count) => {
      console.log(`Todos count: ${count}`);
    }, (err) => {
      console.log('Unable to fetch the todos', err);
    });


    db.collection('Users').find({name: 'shubham seervi'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    });

    db.close();
});
