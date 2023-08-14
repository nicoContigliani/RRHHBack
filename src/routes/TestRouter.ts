
import express, { Request, Response } from 'express';
import Test from '../Aiservices/Test/TestRouter'
const router = express.Router();

// Ruta
router.use('/Test',Test)

export default router;
