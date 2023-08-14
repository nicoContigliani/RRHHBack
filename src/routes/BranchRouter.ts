
import express, { Request, Response } from 'express';
import Branch from '../Aiservices/Branch/BranchRouter'
const router = express.Router();

// Ruta
router.use('/Branch',Branch)

export default router;
