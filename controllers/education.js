const Education = require('../models/Education')
const asyncWrapper = require('../middleware/async')
const fs = require('fs')
const path = require('path')
const getAllEducations = asyncWrapper(async (req, res) => {
  const educations = await Education.find({})
  res.status(201).json({ educations })
})

const createEducation = asyncWrapper(async (req, res) => {
  const education = {
    ...req.body,
    img: {
      data: fs.readFileSync(
        path.join(__dirname, '../store/images/educations', req.file.filename)
      ),
      contentType: req.file.mimetype,
    },
  }
  const educationCreated = await Education.create(education)
  res.status(201).json({ educationCreated })
})

module.exports = { getAllEducations, createEducation }
