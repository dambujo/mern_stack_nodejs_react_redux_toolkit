const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get All Goals' });
};
const createGoal = (req, res) => {
  res.status(201).json({ message: 'Set goals' });
};
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};
const deletGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

export default { getGoals, createGoal, updateGoal, deletGoal };
