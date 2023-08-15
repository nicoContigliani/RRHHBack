
import express, { Request, Response } from 'express';
import Result from '../Apiservices/Result/ResultRouter'
const router = express.Router();

// Ruta
router.use('/Result',Result)

export default router;
