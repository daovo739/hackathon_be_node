const mongoose = require('mongoose')

const EducationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name of education is required'],
    trim: true,
  },
  legalRepresentative: {
    type: String,
    required: [true, 'Legal representative  is required'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  principal: {
    type: String,
    required: [true, 'Principal is required'],
    trim: true,
  },
  isKYCVerified: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Education', EducationSchema)
