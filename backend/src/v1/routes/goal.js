import { Router } from 'express';
import goalController from '../../controllers/goalController.js';

const router = Router();

router.route('/').get(goalController.getGoals).post(goalController.createGoal);
router
  .route('/:id')
  .put(goalController.updateGoal)
  .delete(goalController.deletGoal);

//router.get('/', goalController.getGoals);
//router.post('/', goalController.createGoal);
//router.put('/:id', goalController.updateGoal);
//router.delete('/:id', goalController.deletGoal);

export default router;
