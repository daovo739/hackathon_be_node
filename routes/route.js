const express = require('express')
const router = express.Router()
const multer = require('multer')

const {
  getAllEducations,
  createEducation,
  deleteEducation,
  updateEducation,
} = require('../controllers/education')

const { mintNFT, getAllNFT } = require('../controllers/nft')
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
  .post(upload.array('image', 10), createEducation)

router.route('/education/:id').delete(deleteEducation).patch(updateEducation)

router
  .route('/request')
  .get(getAllRequest)
  .post(upload.array('image', 10), createRequest)

router.route('/request/:id').delete(deleteRequest).patch(updateRequest)

router.route('/nft').get(getAllNFT).post(upload.single('image'), mintNFT)

module.exports = router
