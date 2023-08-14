
import express, { Request, Response } from 'express';
import Result from '../Aiservices/Result/ResultRouter'
const router = express.Router();

// Ruta
router.use('/Result',Result)

export default router;
