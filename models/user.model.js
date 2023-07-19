import mongoose from 'mongoose'

const UserModel = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
})

export default mongoose.model('User', UserModel)
