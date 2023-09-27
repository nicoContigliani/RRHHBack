
import express, { Request, Response } from 'express';
import RoadMap from '../Apiservices/RoadMap/RoadMapRouter'
const router = express.Router();

// Ruta
router.use('/RoadMap',RoadMap)

export default router;
