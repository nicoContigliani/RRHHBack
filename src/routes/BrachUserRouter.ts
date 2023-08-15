
import express, { Request, Response } from 'express';
import BrachUser from '../Apiservices/BrachUser/BrachUserRouter'
const router = express.Router();

// Ruta
router.use('/BrachUser',BrachUser)

export default router;
