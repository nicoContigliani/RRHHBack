import express, { Request, Response } from 'express';
import auth from '../Apiservices/Auth/authRouter'
const router = express.Router();


// Ruta de ejemplo
router.use('/Auth',auth)

export default router;