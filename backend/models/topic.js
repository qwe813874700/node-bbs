const mongoose = require('mongoose')

const Schema = mongoose.Schema
const objectId = Schema.ObjectId

const topicSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  create_time: {
    type: Date,
    default: Date.now,
    index: true
  },
  update_time: { // 最后更新话题时间
    type: Date,
    default: Date.now
  },
  last_reply_time: { // 最后回复时间
    type: Date,
    default: Date.now
  },
  author_id: { // 作者ID
    type: objectId,
    require: true
  },
  lock: { // 锁定
    type: Boolean,
    default: false
  },
  top: { // 置顶
    type: Boolean,
    default: false
  },
  tab: { // 话题标签, 0: 问答, 1: 分享 2.测试
    type: String,
    enum: [0, 1, 2]
  },
  delete: { // 是否被删除
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.Model('Topic', topicSchema)