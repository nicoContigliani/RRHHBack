
import express, { Request, Response } from 'express';
import TypeInterview from '../Aiservices/TypeInterview/TypeInterviewRouter'
const router = express.Router();

// Ruta
router.use('/TypeInterview',TypeInterview)

export default router;
