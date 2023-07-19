import mongoose, { Schema } from 'mongoose'

const TokenModel = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'Social' },
  refreshToken: { type: String, required: true }
})

export default mongoose.model('Token', TokenModel)
