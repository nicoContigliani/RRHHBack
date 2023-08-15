
import express, { Request, Response } from 'express';
import TypeInterview from '../Apiservices/TypeInterview/TypeInterviewRouter'
const router = express.Router();

// Ruta
router.use('/TypeInterview',TypeInterview)

export default router;
