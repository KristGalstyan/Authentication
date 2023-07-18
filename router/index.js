import { Router } from 'express'
import { registrValidation } from '../validations/registr.validation.js'
import { login, logout, register } from '../UserController/UserController.js'

const router = new Router()

router.post('/registration', registrValidation, register)
router.post('/login', registrValidation, login)
router.post('/login', registrValidation, logout)

export default router
