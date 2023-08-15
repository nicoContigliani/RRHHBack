
import express, { Request, Response } from 'express';
import InterviewResponsible from '../Apiservices/InterviewResponsible/InterviewResponsibleRouter'
const router = express.Router();

// Ruta
router.use('/InterviewResponsible',InterviewResponsible)

export default router;
