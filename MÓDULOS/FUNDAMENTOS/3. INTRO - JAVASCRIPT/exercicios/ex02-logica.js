// Exercício -  Lidando com arrays
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

let higher = -Infinity;

let oddNumbers = 0;

let lowest = Infinity;

for (let i = 0, len = numbers.length; i < len; i++) {
  // Percorra o array imprimindo todos os valores contidos nele com a função console.log().
  console.log(numbers[i]);

  // Some todos os valores contidos no array e imprima o resultado.
  sum += numbers[i];
  console.log(`Sum = ${sum}`);

  // Utilizando for, descubra o maior valor contido no array e imprima-o.
  if (numbers[i] > higher) higher = numbers[i];

  // Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
  if (numbers[i] % 2 != 0) oddNumbers++;

  // Utilizando for, descubra o menor valor contido no array e imprima-o.
  if (numbers[i] < lowest) lowest = numbers[i];
}
  // Calcule e imprima a média aritmética dos valores contidos no array.
const average = sum / numbers.length;
console.log(`Average = ${average}`);

// Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
if (average > 20) {
  console.log(`Average = ${average}, valor maior que 20`);
} else {
  console.log(`Average = ${average}, valor menor ou igual a 20`);
}

console.log(`Higher number = ${higher}`);

if (oddNumbers > 0) {
  console.log(`Números ímpares encontrados = ${oddNumbers}`);
} else {
  console.log(`Números ímpares não encontrados`);
}

console.log(`Lower number = ${lowest}`);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let arr = [];

for (let i = 1; i <= 25; i++) {
  arr.push(i);
}

console.log(`${`Array values:`.padEnd(30)} ${arr.join(" ")}`);

let arrDividedBy2 = [];

for (let i = 0, len = arr.length; i < len; i++) {
  arrDividedBy2.push(arr[i] / 2);
}

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
console.log(`${`Array values divided by 2:`.padEnd(30)} ${arrDividedBy2.join(" ")}`);
