
import express, { Request, Response } from 'express';
import CVSection from '../Aiservices/CVSection/CVSectionRouter'
const router = express.Router();

// Ruta
router.use('/CVSection',CVSection)

export default router;
