import express from 'express'
import router from './router/index.js'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { errormiddleware } from './middleware/error.middleware.js'
import { AuthMiddleware } from './middleware/auth.middleware.js'
import multer from 'multer'

dotenv.config()

const app = express()

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  })
)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

app.use(express.json())
app.use(cookieParser())

app.use('/upload', express.static('uploads'))

app.post('/upload', AuthMiddleware, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`
  })
})

mongoose
  .connect(process.env.DATA_BASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB ok')
  })
  .catch((err) => {
    console.log('DB error', err)
  })

app.use('/api', router, errormiddleware)

app.listen(process.env.SERVER_URL)
