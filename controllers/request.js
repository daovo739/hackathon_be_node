const Request = require('../models/Request')
const asyncWrapper = require('../middleware/async')
const fs = require('fs')
const path = require('path')
const { cloudinary } = require('../utils/cloudinary')

// const getAllRequest = asyncWrapper(async (req, res) => {
//   const request = await Request.find({})
//   res.status(201).json({ request })
// })

// const createRequest = asyncWrapper(async (req, res) => {
//   const education = {
//     ...req.body,
//     img: {
//       data: fs.readFileSync(
//         path.join(__dirname, '../store/images/educations', req.file.filename)
//       ),
//       contentType: req.file.mimetype,
//     },
//   }
//   const educationCreated = await Education.create(education)
//   res.status(201).json({ educationCreated })
// })

const uploadImage = asyncWrapper(async (req, res) => {
  const fileStr = req.body.data
  const uploadResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: 'dev_setups',
  })
  console.log(uploadResponse)
  res.status(201).json({ message: 'Image uploaded' })
})

module.exports = { uploadImage }
