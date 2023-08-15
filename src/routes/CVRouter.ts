
import express, { Request, Response } from 'express';
import CV from '../Apiservices/CV/CVRouter'
const router = express.Router();

// Ruta
router.use('/CV',CV)

export default router;
