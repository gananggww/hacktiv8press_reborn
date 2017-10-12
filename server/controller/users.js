const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  fb_id: String,
  img: String,
  email: String,
  name: String
});
const User = mongoose.model('User', usersSchema);

module.exports = User
