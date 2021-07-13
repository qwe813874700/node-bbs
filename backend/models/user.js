const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  signature: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('User', userSchema)
