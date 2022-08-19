const Education = require('../models/Education')
const asyncWrapper = require('../middleware/async')
const fs = require('fs')
const path = require('path')

const getAllEducations = asyncWrapper(async (req, res) => {
  // await Education.deleteMany({})
  const { isKYCVerified } = req.query
  const queryObject = {}

  if (isKYCVerified) {
    queryObject.isKYCVerified = isKYCVerified === 'true' ? true : false
  }
  const education = await Education.find(queryObject)
  res.status(201).json({ education })
})

const createEducation = asyncWrapper(async (req, res) => {
  const education = {
    ...req.body,
    image: {
      data: new Buffer.from(req.file.buffer, 'base64'),
      contentType: req.file.mimetype,
    },
  }
  const educationCreated = await Education.create(education)
  res.status(201).json({ educationCreated })
})

module.exports = { getAllEducations, createEducation }
