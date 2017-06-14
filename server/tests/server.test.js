const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//Test seed data
const todos = [{
  text: "first todo",
}, {
  text: "second todo"
}];

//Testing life cycle code inside beforeEach runs everytime
beforeEach((done) => {
  //mongodb native method.
  // empty the db for proper testing.
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

// POST describe block.
describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    // test case.
    var text = 'tst todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if(err) {
        return done(err);
      }

      Todo.find({text}).then((todos) => {
        // we are clearning the db in beforeEach
        // checking todos length to be one.
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });

  it('should not create todo with invaild body data',(done) => {
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err, res) => {
      if(err) {
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(2);
        done();
      }).catch((e) => done(e));
    });
  });
});


//describe block for GET /todos
describe('GET / todos', () => {
  it('should get all todos', (done) =>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  })
});
