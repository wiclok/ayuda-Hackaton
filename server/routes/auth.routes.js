import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/auth.constroller.js'

const authRouter = Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)

export default authRouter