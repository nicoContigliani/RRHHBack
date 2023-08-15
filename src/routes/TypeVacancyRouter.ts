
import express, { Request, Response } from 'express';
import TypeVacancy from '../Apiservices/TypeVacancy/TypeVacancyRouter'
const router = express.Router();

// Ruta
router.use('/TypeVacancy',TypeVacancy)

export default router;
