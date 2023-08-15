
import express, { Request, Response } from 'express';
import CompanyVacances from '../Apiservices/CompanyVacances/CompanyVacancesRouter'
const router = express.Router();

// Ruta
router.use('/CompanyVacances',CompanyVacances)

export default router;
