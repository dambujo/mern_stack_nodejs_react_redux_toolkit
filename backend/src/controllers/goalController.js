import asynHandler from 'express-async-handler';
import Goal from '../models/goalModel.js';

// @desc    Get goals
// @route   GET /api/v1/goals
// @access  Private
const getGoals = asynHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc    create goal
// @route   POST /api/v1/goals
// @access  Private
const createGoal = asynHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc    Update goal
// @route   PUT /api/v1/goals
// @access  Private
const updateGoal = asynHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc    Delete goals
// @route   DELETE /api/v1/goals
// @access  Private
const deletGoal = asynHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }
  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

export default { getGoals, createGoal, updateGoal, deletGoal };
