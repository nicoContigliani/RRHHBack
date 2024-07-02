
import express, { Request, Response } from 'express';
import assistantGet from '../Apiservices/AssistantGet/AssistantGetRouter'
const router = express.Router();

// Ruta
router.use('/AssistantGet', assistantGet)

export default router;
