const mongoose = require('mongoose')
const { Schema } = mongoose

const NFTSchema = new mongoose.Schema(
  {
    tokenID: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    education: {
      type: Schema.Types.ObjectId,
      ref: 'Education',
    },
    studentID: {
      type: String,
      trim: true,
    },
    dob: {
      type: Date,
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
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
)

// const CounterSchema = new mongoose.Schema({
//   _id: { type: String, required: true },
//   seq: { type: Number, default: 0 },
// })

// const counter = mongoose.model('counter', CounterSchema)

// NFTSchema.pre('save', function (next) {
//   const doc = this
//   counter.findByIdAndUpdate(
//     { _id: 'entityId' },
//     { $inc: { seq: 1 } },
//     function (error, counter) {
//       if (error) return next(error)
//       doc.tokenID = counter.seq
//       next()
//     }
//   )
// })

module.exports = mongoose.model('NFT', NFTSchema)
