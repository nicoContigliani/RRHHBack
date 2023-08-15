
import express, { Request, Response } from 'express';
import Section from '../Apiservices/Section/SectionRouter'
const router = express.Router();

// Ruta
router.use('/Section',Section)

export default router;
