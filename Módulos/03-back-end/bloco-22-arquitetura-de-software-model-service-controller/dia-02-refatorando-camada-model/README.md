# Exercícios - agora, a prática

Parabéns, você mandou muito bem na refatoração!!!🎉

Agora a empresa Trybecar confiou em você para criar mais alguns componentes e testes, para camada de model! Eles precisam que você forneça as seguintes funcionalidades que realizam acesso com o banco de dados:

🎯 Listar todas as pessoas motoristas que estão cadastradas; 🎯 Encontrar uma pessoa motorista por meio do id; 🎯 Cadastrar uma pessoa motorista.

Para isso, crie sua branch de exercícios a partir da branch deste [repositório](https://github.com/tryber/trybecar/tree/2-live-lecture).

⚠️ Atenção: A resolução dos exercícios deste dia, será utilizada como base nos próximos, lembre-se de realizá-los. 😉

## Exercício 1: Listar todas as pessoas motoristas que estão cadastradas

Aqui precisamos seguir alguns passos:

* Criar o model e a função findAll, responsável pelo acesso ao banco de dados em src/models/driver.model.js;
* Adicionar esta nova model no arquivo src/models/index.js;
* Criar o teste de unidade desta nova função em tests/unit/models/driver.model.test.js e seu respectivo mock.

Na escrita dos testes de unidade, pode utilizar este dados como mock:

```
[
  { id: 1, name: 'Liana Cisneiros' },
  { id: 2, name: 'Fábio Frazão' },
  { id: 3, name: 'Anastácia Bicalho' },
  { id: 4, name: 'Samara Granjeiro' },
  { id: 5, name: 'Levi Teixeira' },
]
```

## Exercício 2: Encontrar uma pessoa motorista por meio do id

Aqui precisamos seguir alguns passos:

* Criar a função findById, responsável pelo acesso ao banco de dados em src/models/driver.model.js;
* Criar o teste de unidade desta nova função em tests/unit/models/driver.model.test.js e seu respectivo mock.

Na escrita dos testes de unidade, pode utilizar este dados como mock:

```
{ id: 4, name: 'Samara Granjeiro' }
```

## Exercício 3: Cadastrar uma pessoa motorista

Aqui precisamos seguir alguns passos:

* Criar a função insert, responsável pelo acesso ao banco de dados em src/models/driver.model.js;
* Criar o teste de unidade desta nova função em tests/unit/models/driver.model.test.js e seu respectivo mock.

Na escrita dos testes de unidade, pode utilizar este dados como mock:

```
{ insertId: 6 }
```