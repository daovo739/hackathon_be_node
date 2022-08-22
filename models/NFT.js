const mongoose = require('mongoose')

const NFTSchema = new mongoose.Schema(
  {
    tokenID: {
      type: Number,
      unique: true,
      default: 0,
    },
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
    studentID: {
      type: String,
      trim: true,
    },
    dob: {
      type: String,
      trim: true,
    },
    cer_owner: {
      type: String,
      required: [true, 'Owner is required'],
    },
    imgURI: {
      type: String,
      required: [true, 'Image is required'],
    },
    nationID: {
      type: String,
      required: [true, 'Nation ID is required'],
    },
  },
  { timestamps: true }
)

const CounterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
})

const counter = mongoose.model('counter', CounterSchema)

NFTSchema.pre('save', function (next) {
  const doc = this
  counter.findByIdAndUpdate(
    { _id: 'entityId' },
    { $inc: { seq: 1 } },
    function (error, counter) {
      if (error) return next(error)
      doc.tokenID = counter.seq
      next()
    }
  )
})

module.exports = mongoose.model('NFT', NFTSchema)
