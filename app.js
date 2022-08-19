require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')
var cors = require('cors')
const errorHandlerMiddleware = require('./middleware/error-handle')
const router = require('./routes/route')

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1', router)

// errors
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
