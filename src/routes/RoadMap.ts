
import express, { Request, Response } from 'express';

import RoadMap from '../Apiservices/RoadMap/RoadMapRouter'
import { Validator } from '../middlewares/validator';

const router = express.Router();

// Ruta
router.use('/RoadMap',Validator,RoadMap)

export default router;
