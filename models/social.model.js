import mongoose from 'mongoose'

const SocialModel = mongoose.Schema({
  serviceId: {
    type: String
  },
  avatar: {
    type: String
  },
  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Social', SocialModel)
