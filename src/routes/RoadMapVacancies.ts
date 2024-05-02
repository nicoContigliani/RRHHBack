
import express, { Request, Response } from 'express';

import RoadMap from '../Apiservices/RoadMapVacancies/RoadMapVacanciesRouter'
import { Validator } from '../middlewares/validator';

const router = express.Router();

// Ruta
router.use('/RoadMapVacancies',
// Validator,
RoadMap)

export default router;
