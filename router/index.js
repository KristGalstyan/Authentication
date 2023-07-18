import { Router } from 'express'
import { registrValidation } from '../validations/registr.validation.js'
import { register } from '../UserController/UserController.js'

const router = new Router()

router.post('/registration', registrValidation, register)

export default router
