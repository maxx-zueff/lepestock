const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: String,
  vkID: String});

module.exports = mongoose.model('Users', userSchema);
