const mongoose = require('mongoose');
const crypto = require('crypto');

const codeSchema = new mongoose.Schema({
  createdAt: {type: Date, default: Date.now()},
  phone: String,
  salt: String,
  hash: {type: String, required: true}});

codeSchema.methods.setCode = function(code) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(code, this.salt, 10000, 512, 'sha512')
      .toString('hex');
};

codeSchema.methods.validateCode = function(code) {
  const hash = crypto.pbkdf2Sync(code, this.salt, 10000, 512, 'sha512')
      .toString('hex');
  return this.hash === hash;
};

module.exports = mongoose.model('Codes', codeSchema);
