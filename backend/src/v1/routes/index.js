import { Router } from 'express';
import goal from './goal.js';

const router = Router();

router.use('/api/v1/goals', goal);

export default router;
