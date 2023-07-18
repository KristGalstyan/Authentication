import bcrypt from 'bcrypt'
import { UserDto } from '../dto/UserDto'
import { generateTokens, saveToken } from './token.service'

export async function registrationService(email, password, userName) {
  const candidate = await UserModel.findOne({ email })
  if (candidate) {
    throw ApiError.BadRequest(
      `Пользватель с почтовым адресом ${email} уже существует`
    )
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
