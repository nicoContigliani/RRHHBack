
import express, { Request, Response } from 'express';
import TypeTest from '../Apiservices/TypeTest/TypeTestRouter'
const router = express.Router();

// Ruta
router.use('/TypeTest',TypeTest)

export default router;
