const mongoose = require('mongoose')

const NFTSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  center: {
    type: String,
    required: [true, 'Center is required'],
    trim: true,
  },
  nationalID: {
    type: String,
    trim: true,
  },
  studentID: {
    type: String,
    trim: true,
  },
  dob: {
    type: String,
    trim: true,
  },
  owner: {
    type: String,
    required: [true, 'Owner is required'],
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  imgURI: {
    type: String,
    required: [true, 'Image is required'],
  },
})

module.exports = mongoose.model('NFT', NFTSchema)
