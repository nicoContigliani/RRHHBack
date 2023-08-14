
import express, { Request, Response } from 'express';
import RollUser from '../Aiservices/RollUser/RollUserRouter'
const router = express.Router();

// Ruta
router.use('/RollUser',RollUser)

export default router;
