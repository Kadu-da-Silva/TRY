// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição
// Subtração
// Multiplicação
// Divisão
// Módulo

const a = 10;
const b = 20;
const sum = a + b;

console.log(`${a} + ${b} = ${sum}`);

const c = 25;
const d = 5;
const sub = c - d;

console.log(`${c} - ${d} = ${sub}`);

const e = 2;
const f = 17;
const mul = e * f;

console.log(`${e} * ${f} = ${mul}`);


const g = 256;
const h = 2;
const div = g / h;

console.log(`${g} / ${h} = ${div}`);

const i = 11;
const j = 2;
const mod = i % j;

console.log(`${i} % ${j} = ${mod}`);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

const k = 101;
const l = 20;

if (k > l) {
  console.log(`O maior número é k - ${k}`);
} else {
  console.log(`O maior número é l - ${l}`);
}

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

const m = 151;
const n = 20;
const o = 600;

if ((m > n) && (m > o)) {
  console.log(`O maior número é m - ${m}`);
} else if ((n > a) && (n > o)) {
  console.log(`O maior número é n - ${n}`);
} else {
  console.log(`O maior número é o - ${o}`);
}

// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num = -1;

if (num > 0) {
  console.log(`${num} é positivo`);
} else if (num < 0) {
  console.log(`${num} é negativo`);
} else {
  console.log(`Zero`);
}

// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

const anguloA = 50;
const anguloB = 80;
const anguloC = 50;

if (anguloA + anguloB + anguloC == 180) {
  console.log('true');
} else {
  console.log('false');
}

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

// Source: https://en.wikipedia.org/wiki/Chess_piece

const piece = 'qUeEn';

switch (piece.toLowerCase()) {
  case 'torre':
    console.log(`Torre: qualquer número de quadrados vagos para frente, para trás, para a esquerda ou para a direita em uma linha reta.`);
    break;
  case 'bispo':
    console.log(`Bispo: aqualquer número de quadrados vagos na diagonal em uma linha reta.`);
    break;
  case 'rainha':
    console.log(`Rainha: move qualquer número de quadrados vazios em qualquer direção: para frente, para trás, para a esquerda, para a direita ou na diagonal, em linha reta.`);
    break;
  case 'Rei':
    console.log(`Rei: move-se exatamente uma casa vazia em qualquer direção: para frente, para trás, para a esquerda, para a direita ou na diagonal.`);
    break;
  case 'cavalo':
    console.log(`Cavalo:move-se em uma diagonal estendida de um canto de qualquer retângulo de quadrados 2 × 3 até o canto oposto mais distante.`)
    break;
  case 'peão':
    console.log(`Peão: avança exatamente uma casa, ou opcionalmente, duas casas quando estiver em sua casa inicial, em direção ao lado do adversário no tabuleiro`);
    break;
  default:
    console.log(`Nome da peça inválido`);
}

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const percentage = 101;

if (percentage < 0 || percentage > 100) {
  console.log('Invalid percentage');
} else if (percentage >= 90) {
  console.log('A');
} else if (percentage >= 80) {
  console.log('B');
} else if (percentage >= 70) {
  console.log('C');
} else if (percentage >= 60) {
  console.log('D');
} else if (percentage >= 50) {
  console.log('E');
} else {
  console.log('F');  
}

// 8 Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par.
// Caso contrário, ele retorna false.
// Bonus: use somente um if.

const p = 13;
const q = 12;
const r = 5;

if ((p % 2 == 0) || (q % 2 == 0) || (r % 2 == 0)) {
  console.log('true');
} else {
  console.log('false');
}

// 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar.
// Caso contrário, ele retorna false.
// Bonus: use somente um if.

const s = 14;
const t = 12;
const u = 5;

if ((s % 2 != 0) || (t % 2 != 0) || (u % 2 != 0)) {
  console.log('true');
} else {
  console.log('false');
}

// 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda.
// A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo,
// sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const product_cost = 900;
const sale_price = 1200;

const tax = 0.2;
const sold_itens_number = 1000;

if (product_cost < 0 || sale_price < 0) {
  console.log('Invalid input');
} else {
  const tax_cost = product_cost * tax;
  const profit_per_sale = sale_price - (product_cost + tax_cost);
  console.log(`${sold_itens_number} products sale profit: ${ sold_itens_number * profit_per_sale }`);
}

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10.
// Para as faixas de impostos, use as seguintes referências:

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%.
// O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota,
// então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,00 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

const gross_salary = 3000;


// INSS

let inss_aliquot = null;

if (gross_salary <= 1556.94) { // Salário bruto até R$ 1.556,94: alíquota de 8%
  inss_aliquot = gross_salary * 0.08;
} else if (gross_salary <= 2594.92) { // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
  inss_aliquot = gross_salary * 0.09;
} else if (gross_salary <= 5189.82) { // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
  inss_aliquot = gross_salary * 0.11;
} else { // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  inss_aliquot = 570.88;
}

// FIM INSS

const base_salary = gross_salary - inss_aliquot;

// IR

let ir_aliquot = null;
let tax_deduction = null;

if (base_salary <= 1903.98) { // Até R$ 1.903,98: isento de imposto de renda
  ir_aliquot = 0;
  tax_deduction = 0;
} else if (base_salary <= 2826.65) { // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
  ir_aliquot = base_salary * 0.075;
  tax_deduction = 142.80;
} else if (base_salary <= 3750.05) { // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
  ir_aliquot = base_salary * 0.15;
  tax_deduction = 354.80;
} else if (base_salary <= 4664.68) { // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
  ir_aliquot = base_salary * 0.225;
  tax_deduction = 636.13;
} else { // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
  ir_aliquot = base_salary * 0.275;
  tax_deduction = 869.36;
}

// FIM IR

const net_salary = base_salary - (ir_aliquot - tax_deduction);

console.log(`Net salary = ${net_salary}`);