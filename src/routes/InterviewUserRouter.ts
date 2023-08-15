
import express, { Request, Response } from 'express';
import InterviewUser from '../Apiservices/InterviewUser/InterviewUserRouter'
const router = express.Router();

// Ruta
router.use('/InterviewUser',InterviewUser)

export default router;
