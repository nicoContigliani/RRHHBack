
import express, { Request, Response } from 'express';
import TestInterview from '../Apiservices/TestInterview/TestInterviewRouter'
const router = express.Router();

// Ruta
router.use('/TestInterview',TestInterview)

export default router;
