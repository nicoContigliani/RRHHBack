
import express, { Request, Response } from 'express';
import TypeVacancy from '../Aiservices/TypeVacancy/TypeVacancyRouter'
const router = express.Router();

// Ruta
router.use('/TypeVacancy',TypeVacancy)

export default router;
