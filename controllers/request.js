const Request = require('../models/Request')
const asyncWrapper = require('../middleware/async')
const fs = require('fs')
const path = require('path')
const { log } = require('console')

const getAllRequest = asyncWrapper(async (req, res) => {
  // await Request.deleteMany({})
  const { status } = req.query
  const queryObject = {}
  if (status) {
    queryObject.status = status
  }
  const request = await Request.find(queryObject)
    .populate('education', 'name')
    .exec()
  res.status(201).json({ request })
})

const createRequest = asyncWrapper(async (req, res) => {
  const request = {
    ...req.body,
    imageNFT: {
      data: new Buffer.from(req.files[0].buffer, 'base64'),
      contentType: req.files[0].mimetype,
    },
    imageKYC: {
      data: new Buffer.from(req.files[1].buffer, 'base64'),
      contentType: req.files[1].mimetype,
    },
  }
  const requestCreated = await Request.create(request)
  res.status(201).json({ requestCreated })
})

const deleteRequest = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const request = await Request.findOneAndDelete({ _id: id })
  if (!request) {
    return next(createCustomError(`No request with id : ${idD}`, 404))
  }
  res.status(200).json({ msg: 'request deleted' })
})

const updateRequest = asyncWrapper(async (req, res, next) => {
  const { id } = req.params

  const request = await Request.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!request) {
    return next(createCustomError(`No request with id : ${id}`, 404))
  }

  res.status(200).json({ request })
})

module.exports = { createRequest, getAllRequest, deleteRequest, updateRequest }
