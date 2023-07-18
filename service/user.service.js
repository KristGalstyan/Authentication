import bcrypt from 'bcrypt'
import { UserDto } from '../dto/UserDto.js'
import { generateTokens, saveToken } from './token.service.js'
import UserModel from '../models/user.model.js'
import ApiError from '../ErrorValidation/ApiError.js'

export async function registrationService(email, password, userName) {
  const candidate = await UserModel.findOne({ email })
  if (candidate) {
    throw ApiError.BadRequest(`User with email address ${email} already exists`)
  }
  const hashPassword = await bcrypt.hash(password, 6)

  const user = await UserModel.create({
    userName,
    email,
    password: hashPassword,
    activationLink
  })

  const userDto = new UserDto(user)
  const tokens = generateTokens({ ...userDto })
  await saveToken(userDto.id, tokens.refreshToken)

  return {
    ...tokens,
    user: userDto
  }
}
