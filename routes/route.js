const express = require('express')
const router = express.Router()
const multer = require('multer')

const {
  getAllEducations,
  createEducation,
} = require('../controllers/education')

const { mintNFT } = require('../controllers/nft')
const { createRequest, getAllRequest } = require('../controllers/request')

const multerStorage = multer.memoryStorage()
const upload = multer({ storage: multerStorage })
router
  .route('/education')
  .get(getAllEducations)
  .post(upload.single('image'), createEducation)

router
  .route('/request')
  .get(getAllRequest)
  .post(upload.single('image'), createRequest)

module.exports = router
