
import express, { Request, Response } from 'express';
import CVUser from '../Apiservices/CVUser/CVUserRouter'
const router = express.Router();

// Ruta
router.use('/CVUser',CVUser)

export default router;
