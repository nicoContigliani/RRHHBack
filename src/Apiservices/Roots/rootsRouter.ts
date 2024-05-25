import express, { Request, Response } from 'express';
import { login, signIn, get } from './rootsController';

const router = express.Router();

router.post('/', signIn)
router.put('/', login)

router.get('/', get)




export default router;