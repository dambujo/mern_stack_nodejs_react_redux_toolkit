import { Router } from 'express';
import goalController from '../../controllers/goalController.js';
import protect from '../../middleware/authMiddleware.js';

const router = Router();

router
  .route('/')
  .get(protect, goalController.getGoals)
  .post(protect, goalController.createGoal);
router
  .route('/:id')
  .put(protect, goalController.updateGoal)
  .delete(protect, goalController.deletGoal);

export default router;
