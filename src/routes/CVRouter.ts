
import express, { Request, Response } from 'express';
import CV from '../Apiservices/CV/CVRouter'
import { Validator } from '../middlewares/validator';
const router = express.Router();

// Ruta
router.use('/CV',Validator,CV)

export default router;
