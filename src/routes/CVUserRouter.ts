
import express, { Request, Response } from 'express';
import CVUser from '../Aiservices/CVUser/CVUserRouter'
const router = express.Router();

// Ruta
router.use('/CVUser',CVUser)

export default router;
