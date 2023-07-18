import bcrypt from 'bcrypt'
import { UserDto } from '../dto/UserDto.js'
import {
  findToken,
  generateTokens,
  saveToken,
  validateRefreshToken
} from './token.service.js'
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
    password: hashPassword
  })

  const userDto = new UserDto(user)
  const tokens = generateTokens({ ...userDto })
  await saveToken(userDto.id, tokens.refreshToken)

  return {
    ...tokens,
    user: userDto
  }
}

export async function loginService(email, password) {
  const user = await UserModel.findOne({ email })

  if (!user) {
    throw ApiError.BadRequest('Incorrect login or password')
  }

  const isPassEquals = await bcrypt.compare(password, user.password)

  if (!isPassEquals) {
    throw ApiError.BadRequest('Неправильный логин или пароль')
  }

  const userDto = new UserDto(user)
  const tokens = generateTokens({ ...userDto })
  await saveToken(userDto.id, tokens.refreshToken)

  return {
    ...tokens,
    user: userDto
  }
}

export async function refreshService(refreshToken) {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError()
  }
  const userData = validateRefreshToken(refreshToken)
  const tokenFromDb = await findToken(refreshToken)

  if (!userData || !tokenFromDb) {
    throw ApiError.UnauthorizedError()
  }

  const user = await UserModel.findById(userData.id)
  const userDto = new UserDto(user)
  const tokens = generateTokens({ ...userDto })
  await saveToken(userDto.id, tokens.refreshToken)

  return {
    ...tokens,
    user: userDto
  }
}
