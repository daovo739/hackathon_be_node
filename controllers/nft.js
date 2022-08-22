const NFT = require('../models/NFT')
const asyncWrapper = require('../middleware/async')

const getAllNFT = asyncWrapper(async (req, res) => {
  const nft = await NFT.find({})
  res.status(201).json({ nft })
})

const mintNFT = asyncWrapper(async (req, res) => {
  const nft = await NFT.create(req.body)
  res.status(201).json({ nft })
})

module.exports = { mintNFT, getAllNFT }
