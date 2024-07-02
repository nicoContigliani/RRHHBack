
import express, { Request, Response } from 'express';
import InterviewRoadMaps from '../Apiservices/InterviewRoadMap/InterviewRoadMapRouter'
const router = express.Router();

// Ruta
router.use('/InterviewRoadMaps',InterviewRoadMaps)

export default router;
