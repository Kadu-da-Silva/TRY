const express = require('express');

const app = express();

app.use(express.json());

const { readFile, saveData } = require('./utils/fsUtils');
const generateToken = require('./utils/generateTokens');

const auth = require('./middleware/auth');
const validName = require('./middleware/validName');
const validPrice = require('./middleware/validPrice');
const validDescription = require('./middleware/validDescription');
const validRating = require('./middleware/validRating');
const validDifficulty = require('./middleware/validDifficulty');
const validCreatedAt = require('./middleware/validCreatedAt');

app.get('/activities', (req, res) => {
  const activities = readFile();
  res.status(200).json(activities);
});

app.post('/activities',
auth,
validName,
validPrice,
validDescription,
validRating,
validDifficulty,
validCreatedAt,
(req, res) => {
  const activities = readFile();
  const { name, price, description } = req.body;

  const newActivity = {
    name,
    price,
    description: {
      rating: description.rating,
      difficulty: description.difficulty,
      createdAt: description.createdAt,
    },
  }

  activities.push(newActivity);
  saveData(activities)

  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;