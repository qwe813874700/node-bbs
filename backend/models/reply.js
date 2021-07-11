const mongoose = require('mongoose')

const Schema = mongoose.Schema
const objectId = Schema.ObjectId

const replySchema =  new Schema({
  content: {
    type: String,
    require: true
  },
  topic_id: {
    type: objectId,
    require: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  author_id: {
    type: objectId
  },
  delete: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Reply', replySchema)
