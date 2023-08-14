
import express, { Request, Response } from 'express';
import Company from '../Aiservices/Company/CompanyRouter'
const router = express.Router();

// Ruta
router.use('/Company',Company)

export default router;
