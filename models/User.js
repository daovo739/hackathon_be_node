const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
  principal: {
    type: String,
    required: [true, 'Principal is required'],
  },
})

module.exports = mongoose.model('User', UserSchema)
