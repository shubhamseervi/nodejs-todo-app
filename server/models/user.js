var mongoose = require('mongoose');

// mongoose model struct for user, with some basic validation
var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
}});


module.exports = {User};
