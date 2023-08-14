
import express, { Request, Response } from 'express';
import User from '../Aiservices/User/UserRouter'
const router = express.Router();

// Ruta
router.use('/User',User)

export default router;
