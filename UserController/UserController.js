import { validationResult } from 'express-validator'
import ApiError from '../ErrorValidation/ApiError'

export async function register(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Validation error', errors.array()))
    }
    const { email, password, userName } = req.body

    const userData = await registrationService(email, password, userName)
    res.send('4')
  } catch (e) {
    next(e)
  }
}
