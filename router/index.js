import { Router } from 'express'
import {
  loginValidation,
  registrValidation
} from '../validations/registr.validation.js'
import {
  login,
  logout,
  refresh,
  register
} from '../UserController/UserController.js'

const router = new Router()

router.post('/registration', registrValidation, register)
router.post('/login', loginValidation, login)
router.post('/logout', registrValidation, logout)

router.get('/refresh', refresh)

export default router
