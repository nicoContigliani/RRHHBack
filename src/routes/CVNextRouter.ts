
import express, { Request, Response } from 'express';
import CVNext from '../Apiservices/CVNext/CVNextRouter'
const router = express.Router();

// Ruta
router.use('/CVNext',CVNext)

export default router;
