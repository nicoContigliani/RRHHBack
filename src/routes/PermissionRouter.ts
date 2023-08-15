
import express, { Request, Response } from 'express';
import Permission from '../Apiservices/Permission/PermissionRouter'
const router = express.Router();

// Ruta
router.use('/Permission',Permission)

export default router;
