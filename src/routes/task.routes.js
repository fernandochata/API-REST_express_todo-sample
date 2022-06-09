
import { Router } from 'express';
import controllerTask from '../controllers/task.controllers.js';

const router = Router();

router.get('/', controllerTask.getAll);

router.get('/:id', controllerTask.getById);

router.post('/', controllerTask.create);

router.put('/:id', controllerTask.update);

router.delete('/:id', controllerTask.delete);

export default router;