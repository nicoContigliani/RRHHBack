
import express, { Request, Response } from 'express';
import RollUser from '../Apiservices/RollUser/RollUserRouter'
const router = express.Router();

// Ruta
router.use('/RollUser',RollUser)

export default router;
