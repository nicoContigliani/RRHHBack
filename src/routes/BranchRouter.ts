
import express, { Request, Response } from 'express';
import Branch from '../Apiservices/Branch/BranchRouter'
const router = express.Router();

// Ruta
router.use('/Branch',Branch)

export default router;
