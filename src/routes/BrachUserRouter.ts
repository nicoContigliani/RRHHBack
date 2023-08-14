
import express, { Request, Response } from 'express';
import BrachUser from '../Aiservices/BrachUser/BrachUserRouter'
const router = express.Router();

// Ruta
router.use('/BrachUser',BrachUser)

export default router;
