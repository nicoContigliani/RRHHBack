
import express, { Request, Response } from 'express';
import Vacancy from '../Aiservices/Vacancy/VacancyRouter'
const router = express.Router();

// Ruta
router.use('/Vacancy',Vacancy)

export default router;
