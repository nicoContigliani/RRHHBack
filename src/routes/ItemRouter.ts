
import express, { Request, Response } from 'express';
import Item from '../Apiservices/Item/ItemRouter'
const router = express.Router();

// Ruta
router.use('/Item',Item)

export default router;
