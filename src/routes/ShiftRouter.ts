
import express, { Request, Response } from 'express';
import Shift from '../Aiservices/Shift/ShiftRouter'
const router = express.Router();

// Ruta
router.use('/Shift',Shift)

export default router;
