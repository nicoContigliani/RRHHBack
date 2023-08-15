
import express, { Request, Response } from 'express';
import PermissionRoll from '../Apiservices/PermissionRoll/PermissionRollRouter'
const router = express.Router();

// Ruta
router.use('/PermissionRoll',PermissionRoll)

export default router;
