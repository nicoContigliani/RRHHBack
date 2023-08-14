
import express, { Request, Response } from 'express';
import itemSection from '../Aiservices/itemSection/itemSectionRouter'
const router = express.Router();

// Ruta
router.use('/itemSection',itemSection)

export default router;
