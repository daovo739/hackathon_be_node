require('dotenv').config()

const connectDB = require('./db/connect')
const Education = require('./models/Education')
const NFT = require('./models/NFT')
const Request = require('./models/Request')

const deleteEdu = async () => {
  await connectDB(process.env.MONGO_URI)
  await Education.deleteMany({})
  console.log('deleted all education')
}

const deleteNFT = async () => {
  await connectDB(process.env.MONGO_URI)
  await NFT.deleteMany({})
  console.log('deleted all NFT')
}
const deleteRequest = async () => {
  await connectDB(process.env.MONGO_URI)
  await Request.deleteMany({})
  console.log('deleted all Request')
}

module.exports = { deleteEdu, deleteNFT, deleteRequest }

// node -e 'require("./utils").deleteNFT()
