
import express, { Request, Response } from 'express';
import Item from '../Aiservices/Item/ItemRouter'
const router = express.Router();

// Ruta
router.use('/Item',Item)

export default router;
