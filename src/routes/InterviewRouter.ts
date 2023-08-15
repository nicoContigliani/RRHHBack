
import express, { Request, Response } from 'express';
import Interview from '../Apiservices/Interview/InterviewRouter'
const router = express.Router();

// Ruta
router.use('/Interview',Interview)

export default router;
