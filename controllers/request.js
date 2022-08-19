const Request = require('../models/Request')
const asyncWrapper = require('../middleware/async')
const fs = require('fs')
const path = require('path')

const getAllRequest = asyncWrapper(async (req, res) => {
  // await Request.deleteMany({})
  const request = await Request.find({}).populate('education', 'name').exec()
  res.status(201).json({ request })
})

const createRequest = asyncWrapper(async (req, res) => {
  const request = {
    ...req.body,
    image: {
      data: new Buffer.from(req.file.buffer, 'base64'),
      contentType: req.file.mimetype,
    },
  }
  const requestCreated = await Request.create(request)
  res.status(201).json({ requestCreated })
})

module.exports = { createRequest, getAllRequest }
