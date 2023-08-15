
import express, { Request, Response } from 'express';
import Role from '../Apiservices/Role/RoleRouter'
const router = express.Router();

// Ruta
router.use('/Role',Role)

export default router;
