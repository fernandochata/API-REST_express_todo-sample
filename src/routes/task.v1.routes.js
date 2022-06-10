import { Router } from 'express';

import { validateRequest } from '../utils/task.v1.validations.js';

import controllerTask from '../controllers/task.v1.controllers.js';

const router = Router();

router.get('/', controllerTask.getAll);
router.get('/:id', controllerTask.getById);
router.post('/', validateRequest, controllerTask.create);
router.put('/:id',validateRequest, controllerTask.update);
router.delete('/:id', controllerTask.delete);

router.get('/info', controllerTask.getInfo);

export default router;