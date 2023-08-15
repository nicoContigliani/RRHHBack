
import express, { Request, Response } from 'express';
import SectionType from '../Apiservices/SectionType/SectionTypeRouter'
const router = express.Router();

// Ruta
router.use('/SectionType',SectionType)

export default router;
