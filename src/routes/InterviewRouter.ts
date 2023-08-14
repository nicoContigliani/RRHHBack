
import express, { Request, Response } from 'express';
import Interview from '../Aiservices/Interview/InterviewRouter'
const router = express.Router();

// Ruta
router.use('/Interview',Interview)

export default router;
