const express = require('express');
require('express-async-errors');
const app = express();

const apiCredentials = require('./middlewares/apiCredentials');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./utils/teams');

app.use(express.json());
app.use(apiCredentials); 

let nextId = 3;

app.use(express.json());

// Importando os middlewares em outro arquivo

// const validateTeam = (req, res, next) => {
//   const requiredProperties = ['nome', 'sigla'];
//   if (requiredProperties.every((property) => property in req.body)) {
//     next(); // Chama o próximo middleware
//   } else {
//     res.sendStatus(400); // Ou já responde avisando que deu errado
//   }
// };

// const existingId = (req, res, next) => {
//   const id = Number(req.params.id);

//   if (teams.some((t) => t.id === id)) {
//     // se existe, a requisição segue para o próximo middleware
//     next();
//   } else {
//     // se não existe, então vamos retornar o status HTTP 404
//     res.sendStatus(404);
//   }
// };

app.get('/teams', (req, res) => res.json(teams));

// app.get('/teams/:id', existingId, (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find(t => t.id === id);
//   if (team) {
//     res.json(team);
//   } else {
//     res.sendStatus(404);
//   }
// });

// usa o middleware
app.get("/teams/:id", existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  // não precisamos mais conferir, com certeza o team existe
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;