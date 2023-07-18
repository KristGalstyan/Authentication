import { body } from 'express-validator'

export const registrValidation = [
  body('userName').isString().isLength({ min: 2, max: 12 }),
  body('email').isEmail(),
  body('password').isLength({ min: 4, max: 12 })
]
