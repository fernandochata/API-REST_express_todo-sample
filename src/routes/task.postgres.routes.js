import { Router } from 'express';

import { validateRequest } from '../utils/task.validations.js';
import controllerTask from '../controllers/task.postgres.controllers.js';

const router = Router();

router.get('/', controllerTask.getAll);
router.get('/:id', controllerTask.getById);
router.post('/', validateRequest, controllerTask.create);
router.put('/:id',validateRequest, controllerTask.update);
router.delete('/:id', controllerTask.delete);

export default router;