const Education = require('../models/Education')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllEducations = asyncWrapper(async (req, res) => {
  // await Education.deleteMany({})
  const { isKYCVerified, status } = req.query
  const queryObject = {}

  if (isKYCVerified) {
    queryObject.isKYCVerified = isKYCVerified === 'true' ? true : false
  }
  if (status) {
    queryObject.status = status
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
