import express, { Request, Response } from 'express';
import Roots from '../Apiservices/Roots/rootsRouter'
const router = express.Router();


// Ruta de ejemplo
router.use('/Roots',Roots)

export default router;