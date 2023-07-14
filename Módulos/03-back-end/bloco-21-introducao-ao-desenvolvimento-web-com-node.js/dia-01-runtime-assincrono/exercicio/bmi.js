const readline = require('readline-sync');

// const weightInKg = 80;
// const heightInCm = 178;

const BMI_MAX_AND_MIN = {
  'Abaixo do peso': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Peso Normal': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Acima do peso': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obesidade Classe I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obesidade Classe II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obesidade Classe III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function handleBMI(weight, height) {
  console.log(`Peso: ${weight}, Altura: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Abaixo do peso', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

// A função main é o ponto de partida do nosso programa
function main() {
  const weight = readline.questionFloat('Qual é o seu peso? (kg) ');
  const height = readline.questionInt('Qual é a sua altura? (cm) ');

  const bmi = handleBMI(weight, height);
  const bmiResult = handleBMIResult(bmi);

  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(bmiResult);
}

main();