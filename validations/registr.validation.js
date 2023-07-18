import { body } from 'express-validator'

export const registrValidation = [
  body('fullName').isString().isLength({ min: 2, max: 12 }),
  body('email').isEmail(),
  body('password').isLength({ min: 4, max: 12 })
]

export const loginValidator = [
  body('email').isEmail(),
  body('password').isLength({ min: 4, max: 15 })
]
