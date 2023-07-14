# Exercícios - agora, a prática
Se liga nesse foguete!


Antes de começar, crie uma nova pasta e dentro dela, crie um pacote Node.js com o comando npm init. Este pacote será chamado my-scripts. Realize os exercícios dentro desse pacote.

## Exercício 1
Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.

OBS: a sigla IMC, traduzida para o inglês, equivale a BMI(Body Mass Index). Vamos adotar este padrão nos códigos para começarmos a nos acostumar com o formato que aparecerá no mercado de trabalho!

Armazene o código no arquivo bmi.js.

A fórmula para calcular o IMC é:

![Fórmula do IMC](assets/Fórmula%20do%20IMC.png)

Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
Comece criando um novo pacote Node com npm init e respondendo às perguntas do npm.

Por enquanto, não se preocupe em pedir input do usuário. Utilize valores fixos para weight e height.

## Exercício 2
Agora, permita que o código seja executado através do comando npm run bmi.

O novo código criado deve conter o comando que chama o node para executar o arquivo bmi.js.
## Exercício 3
Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.

Edite o código para que os valores de weight e height sejam informados pela pessoa ao responder as perguntas: “What’s your weight?” e “What’s your height?”. Deve-se utilizar o pacote readline-sync.
## Exercício 4
Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre a função adequada para realizar input de valores float.
Encontrou a função? Show! Agora utilize-a para solicitar o input de weight.
## Exercício 5
Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

Considere a seguinte tabela para classificar a situação do IMC:

![tabela imc](assets/Screenshot%202023-07-13%20232512.png)

## Exercício 6
Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.

Utilize async/await para escrever seu código. Procure não utilizar callbacks.

A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.


# Exercícios - bônus
1. Crie um código que exiba o valor dos n primeiros elementos da sequência de Fibonacci.

  A sequência de Fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.

* Armazene o código no arquivo fibonacci.js.
* Utilize o readline-sync para realizar o input de dados.
* O código deve ser acionado através do comando npm run fibonacci.
* Não imprima o valor 0, uma vez que ele não está incluso na sequência.
* Quando n = 10, exatamente 10 elementos devem ser exibidos.
* Adicione validações para garantir que o valor informado é um inteiro maior que 0.

2. Crie uma função que recebe três parâmetros e retorna uma Promise.

* Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
* Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
* Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
* Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
