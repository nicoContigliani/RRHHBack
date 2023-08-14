
import express, { Request, Response } from 'express';
import Permission from '../Aiservices/Permission/PermissionRouter'
const router = express.Router();

// Ruta
router.use('/Permission',Permission)

export default router;
