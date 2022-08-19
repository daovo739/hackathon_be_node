const mongoose = require('mongoose')
const { Schema } = mongoose

const RequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  dob: {
    type: String,
    required: [true, 'Date of birth is required'],
  },
  education: {
    type: Schema.Types.ObjectId,
    ref: 'Education',
  },
  studentID: {
    type: String,
    required: [true, 'Student ID is required'],
  },
  certificate: {
    type: String,
    required: [true, 'Certificate is required'],
  },
  image: {
    data: Buffer,
    contentType: String,
  },
})

module.exports = mongoose.model('Request', RequestSchema)
