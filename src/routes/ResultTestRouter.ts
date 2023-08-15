
import express, { Request, Response } from 'express';
import ResultTest from '../Apiservices/ResultTest/ResultTestRouter'
const router = express.Router();

// Ruta
router.use('/ResultTest',ResultTest)

export default router;
