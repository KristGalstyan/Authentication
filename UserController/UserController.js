import { validationResult } from 'express-validator'
import ApiError from '../ErrorValidation/ApiError.js'
import { loginService, registrationService } from '../service/user.service.js'

export async function register(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Validation error', errors.array()))
    }
    const { email, password, userName } = req.body

    const userData = await registrationService(email, password, userName)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000
    })

    res.json(userData)
  } catch (e) {
    next(e)
  }
}

export async function login(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return next(
        ApiError.BadRequest('Неправильный логин или пароль', errors.array())
      )
    }
    const { email, password } = req.body

    const userData = await loginService(email, password)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000
    })

    return res.json(userData)
  } catch (e) {
    next(e)
  }
}
