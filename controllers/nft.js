const NFT = require('../models/NFT')
const asyncWrapper = require('../middleware/async')
const fs = require('fs')
const path = require('path')
// const getAllEducations = asyncWrapper(async (req, res) => {
//   const educations = await Education.find({})
//   res.status(201).json({ educations })
// })

const mintNFT = asyncWrapper(async (req, res) => {
  const nft = await NFT.create(req.body)
  res.status(201).json({ nft })
})

module.exports = { mintNFT }
