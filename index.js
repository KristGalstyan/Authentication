import express from 'express'
import router from './router/index.js'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { errormiddleware } from './middleware/error.middleware.js'
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

app.use('/upload', express.static('uploads'))

app.post(
  '/upload',

  upload.single('image'),
  (req, res) => {
    res.json({
      url: `http://localhost:4444/upload/${req.file.originalname}`
    })
  }
)
app.use(express.json())

app.use(cookieParser())
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
