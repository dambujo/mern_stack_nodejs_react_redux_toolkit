import asynHandler from 'express-async-handler';

const getGoals = asynHandler(async (req, res) => {
  res.status(200).json({ message: 'Get All Goals' });
});

const createGoal = asynHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Set Goal' });
});

const updateGoal = asynHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deletGoal = asynHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

export default { getGoals, createGoal, updateGoal, deletGoal };
