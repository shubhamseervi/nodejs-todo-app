//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'shubham', age:22};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {

    if(error){

      console.log('Unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: 'something here is  and you read it.',
    //   completed: true
    // }, (error, result) => {
    //   if(error) {
    //     return console.log('Unable to insert todo', error);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });



    db.collection('Users').insertOne({
      name: 'shubham seervi',
      age: 22,
      location: 'shastri nagar, jodhpur, rajasthan'
    }, (error, result) => {
      if(error) {
        return console.log('Unable to insert user', error);
      }

      console.log(result.ops[0]._id.getTimestamp());

    });

    db.close();
});
