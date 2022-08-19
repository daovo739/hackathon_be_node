const express = require('express')
const router = express.Router()
const multer = require('multer')

const {
  getAllEducations,
  createEducation,
} = require('../controllers/education')

const { mintNFT } = require('../controllers/nft')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'store/images/educations')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const fileName =
      file.fieldname +
      '-' +
      uniqueSuffix +
      '.' +
      file.originalname.split('.')[1]
    cb(null, fileName)
  },
})

const upload = multer({ storage: storage })

router
  .route('/education')
  .get(getAllEducations)
  .post(upload.single('image'), createEducation)

router.route('/mint').post(mintNFT)
module.exports = router
