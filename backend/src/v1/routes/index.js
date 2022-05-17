import { Router } from 'express';
import goal from './goal.js';
import user from './user.js';

const router = Router();

router.use('/api/v1/goals', goal);
router.use('/api/v1/users', user);

export default router;
