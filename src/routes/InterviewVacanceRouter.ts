
import express, { Request, Response } from 'express';
import InterviewVacance from '../Apiservices/InterviewVacance/InterviewVacanceRouter'
const router = express.Router();

// Ruta
router.use('/InterviewVacance',InterviewVacance)

export default router;
