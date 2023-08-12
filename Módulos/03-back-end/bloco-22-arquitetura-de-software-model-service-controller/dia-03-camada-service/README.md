# Exercícios - agora, a prática

Agora, a empresa Trybecar confiou em você para criar alguns componentes e testes somente para a camada de Model.

Eles precisam que você forneça as seguintes funcionalidades:

🎯 Ao cadastrar um novo carro, a placa deve seguir o padrão LLLNNN ou LLLNLNN, onde ‘L’ é uma letra maiúscula e ‘N’ é um número;

🎯 Ao cadastrar um novo carro, verifique se não há outros carros já cadastrados com a mesma placa;

🎯 Um carro só poderá ser cadastrado, caso tenha no máximo 10 anos de fabricação.

Preparação
Acesse a branch [3-live-lecture](https://github.com/tryber/trybecar/tree/3-live-lecture), crie uma nova branch para desenvolver os exercícios.

Inicie o banco de dados e rode o script SQL da raiz do projeto para iniciar a DB Feito isso, estamos prontos para a camada Service! 🚀

## Exercício 1
* Adicione uma regra de negócio ao método createCar na service Car que verifica se a placa do carro é válida. A placa deve seguir o padrão LLLNNN ou LLLNLNN, onde ‘L’ é uma letra maiúscula e ‘N’ é um número;

Inputs aceitos:

```
{
  "model": "Ford Ka",
  "lisencePlate": "AAA1111",
  "year": 2020,
  "color": "black",
  "driverId": 1
}

// ou

{
  "model": "Ford Ka",
  "lisencePlate": "AAA1A11",
  "year": 2020,
  "color": "black",
  "driverId": 1
}
```

## Exercício 2
* Adicione uma regra de negócio ao método createCar na service Car que verifica se já existe um carro cadastrado com a mesma placa;

Caso já exista, deve retornar a seguinte mensagem: Carro já cadastrado.

## Exercício 3
* Adicione uma regra de negócio ao método createCar na service Car que verifica se o carro tem no máximo 10 anos de fabricação;

Caso tenha mais que 10 anos, deve retornar a seguinte mensagem: O ano de fabricação do carro não pode ser superior a 10 anos.