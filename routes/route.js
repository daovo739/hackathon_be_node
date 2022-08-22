const express = require('express')
const router = express.Router()
const multer = require('multer')

const {
  getAllEducations,
  createEducation,
  deleteEducation,
  updateEducation,
} = require('../controllers/education')

const { mintNFT } = require('../controllers/nft')
const {
  createRequest,
  getAllRequest,
  deleteRequest,
  updateRequest,
} = require('../controllers/request')

const multerStorage = multer.memoryStorage()
const upload = multer({ storage: multerStorage })

router
  .route('/education')
  .get(getAllEducations)
  .post(upload.single('image'), createEducation)

router.route('/education/:id').delete(deleteEducation).patch(updateEducation)

router
  .route('/request')
  .get(getAllRequest)
  .post(upload.array('image', 10), createRequest)

router.route('/request/:id').delete(deleteRequest).patch(updateRequest)
module.exports = router
