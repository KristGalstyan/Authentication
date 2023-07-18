import express from 'express'
import router from './router/index.js'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  })
)
app.use(express.json())

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

app.use('/api', router)

app.listen(process.env.SERVER_URL)
