
import express, { Request, Response } from 'express';
import TestInterview from '../Aiservices/TestInterview/TestInterviewRouter'
const router = express.Router();

// Ruta
router.use('/TestInterview',TestInterview)

export default router;
