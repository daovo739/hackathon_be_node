const Education = require('../models/Education')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllEducations = asyncWrapper(async (req, res) => {
  // await Education.deleteMany({})
  const { status, principal } = req.query
  const queryObject = {}
  if (status) {
    queryObject.status = status
  }
  if (principal) {
    queryObject.principal = principal
  }

  const education = await Education.find(queryObject)
  res.status(200).json({ education })
})

const createEducation = asyncWrapper(async (req, res) => {
  console.log(req.files)
  const education = {
    ...req.body,
    imageKYC: {
      data: new Buffer.from(req.files[0].buffer, 'base64'),
      contentType: req.files[0].mimetype,
    },
    imageLogo: {
      data: new Buffer.from(req.files[1].buffer, 'base64'),
      contentType: req.files[1].mimetype,
    },
  }
  const educationCreated = await Education.create(education)
  res.status(201).json({ educationCreated })
})

const deleteEducation = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const education = await Education.findOneAndDelete({ _id: id })
  if (!education) {
    return next(createCustomError(`No education with id : ${idD}`, 404))
  }
  res.status(200).json({ msg: 'education deleted' })
})

const updateEducation = asyncWrapper(async (req, res, next) => {
  const { id } = req.params

  const education = await Education.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!education) {
    return next(createCustomError(`No education with id : ${id}`, 404))
  }

  res.status(200).json({ education })
})

module.exports = {
  getAllEducations,
  createEducation,
  deleteEducation,
  updateEducation,
}
