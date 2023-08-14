
import express, { Request, Response } from 'express';
import CV from '../Aiservices/CV/CVRouter'
const router = express.Router();

// Ruta
router.use('/CV',CV)

export default router;
