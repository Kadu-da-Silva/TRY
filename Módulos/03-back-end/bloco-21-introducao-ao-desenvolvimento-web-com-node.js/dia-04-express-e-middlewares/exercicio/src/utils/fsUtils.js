const fs = require('fs');
const path = require('path');

const activities = path.resolve(__dirname, '..', './activities.json');

const readFile = () => {
  const jsonData = fs.readFileSync(activities);
  return jsonData ? JSON.parse(jsonData) : []; // Verifique se jsonData não está vazio antes de converter para JSON
};

const saveData = (data) => {
  const jsonData = JSON.stringify(data);
  fs.writeFileSync(activities, jsonData);
};

module.exports = {
  readFile,
  saveData,
};