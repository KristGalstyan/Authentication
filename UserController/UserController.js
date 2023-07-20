import { validationResult } from 'express-validator'
import ApiError from '../ErrorValidation/ApiError.js'
import {
  loginService,
  registrationService,
  refreshService,
  authorizationWithFBService
} from '../service/user.service.js'
import { removeToken } from '../service/token.service.js'

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

export async function logout(req, res, next) {
  try {
    const { refreshToken } = req.cookies
    const token = await removeToken(refreshToken)
    res.clearCookie('refreshToken')
    res.status(200).json(token)
  } catch (e) {
    console.log(e)
    next(e)
  }
}

export async function refresh(req, res, next) {
  try {
    const { refreshToken } = req.cookies
    const userData = await refreshService(refreshToken)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000
    })
    return res.json(userData)
  } catch (e) {
    next(e)
  }
}

export async function loginWithFacebook(req, res, next) {
  try {
    const { id, name, avatar } = req.body
    const userData = await authorizationWithFBService(id, name, avatar)
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000
    })
    return res.json(userData)
  } catch (e) {
    console.log(e)
    next(e)
  }
}
