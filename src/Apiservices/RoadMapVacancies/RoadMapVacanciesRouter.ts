
import express, { Request, Response } from 'express';
import {
    get,
    getId,
    post,
    update,
    deletes
} from './RoadMapVacanciesController'
const router = express.Router();

// Ruta de ejemplo
router.get('/', get);
router.get('/:id', getId);
router.post('/', post);
router.post('/:id', update);
router.delete('/:id', deletes);

export default router;
