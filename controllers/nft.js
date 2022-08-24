const NFT = require('../models/NFT')
const asyncWrapper = require('../middleware/async')

const getAllNFT = asyncWrapper(async (req, res) => {
  // await NFT.deleteMany({})
  const { id } = req.query
  const queryObject = {}
  if (id) {
    queryObject.tokenID = id
  }
  const nft = await NFT.find(queryObject).populate('education', 'name').exec()
  res.status(200).json({ nft })
})

const mintNFT = asyncWrapper(async (req, res) => {
  const nft = await NFT.create(req.body)
  res.status(201).json({ nft })
})

module.exports = { mintNFT, getAllNFT }
