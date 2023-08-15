
import express, { Request, Response } from 'express';
import User from '../Apiservices/User/UserRouter'
const router = express.Router();

// Ruta
router.use('/User',User)

export default router;
