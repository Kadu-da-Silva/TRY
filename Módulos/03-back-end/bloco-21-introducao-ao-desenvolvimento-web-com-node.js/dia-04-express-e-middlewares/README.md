# Exercícios - agora, a prática

## Exercício 1 🚀
Uma startup de Ecoturismo te procurou para construir uma aplicação back-end que auxilie na criação e compartilhamento de locais ainda não registrados na natureza. O objetivo é valorizar e promover a capacidade turística do Brasil e os principais requisitos da API que essa startup solicitou são:

Cadastrar novas atividades de ecoturismo com as seguintes informações:
Nome da atividade;
Preço;
Descrição: contendo avaliação, dificuldade e data de criação da atividade.
Analisando os requisitos acima, a pessoa Tech Lead identificou as seguintes chaves para a requisição:

```
{
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}
```

1. Crie um servidor Node.js utilizando o framework Express com a estrutura inicial do app.js e server.js e prepare o ambiente instalando a biblioteca nodemon.

2. Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo JSON.

3. Crie um endpoint POST com a rota /activities para adicionar novas atividades. Ela deve:

* Retornar o status 201 e uma mensagem de sucesso quando a atividade tiver sido inserida (formato json);
* Sugestão: { "message": "Atividade cadastrada com sucesso!" }.

4. Crie um middleware de validação para a chave name. Ela deve:

* Ser obrigatória;

* Retornar o status 400 e uma mensagem em formato json;

* Sugestão: { "message": "O campo name é obrigatório" }.
Ter mais de 4 caracteres;

* Retornar o status 400 e uma mensagem em formato json;

* Sugestão: { "message": "O campo name deve ter pelo menos 4 caracteres" }.

5. Crie um middleware de validação para a chave price. Ela deve:

* Ser obrigatória;

* Retornar o status 400 e uma mensagem em formato json;

* Sugestão: { "message": "O campo price é obrigatório" }.
* Ser um número maior ou igual a zero;

* Retornar o status 400 e uma mensagem em formato json;

* Sugestão: { "message": "O campo price deve ser um número maior ou igual a zero" }.

6. Crie um middleware de validação para a chave description que possui as chaves createdAt, rating e difficulty. Ela deve:

* Ter todas as chaves obrigatórias;
* Retornar o status 400 para todas e uma mensagem em formato json;
* Sugestão: { "message": "O campo description é obrigatório" };
* Sugestão: { "message": "O campo createdAt é obrigatório" };
* Sugestão: { "message": "O campo rating é obrigatório" };
* Sugestão: { "message": "O campo difficulty é obrigatório" }.

7. Crie um middleware de validação para a chave createdAt. Ela deve:

* Ter uma data válida no formato dd/mm/aaaa;
* Retornar o status 400 e uma mensagem em formato json;
* Sugestão: { "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" }.

8. Crie um middleware de validação para a chave rating. Ela deve:

* Ter um número inteiro entre 1 e 5;
* Retornar o status 400 e uma mensagem em formato json;
* Sugestão: { "message": "O campo rating deve ser um número inteiro entre 1 e 5" }.

9. Crie um middleware de validação para a chave difficulty. Ela deve:

* Ter apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”;
* Retornar o status 400 e uma mensagem em formato json;
* Sugestão: { "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" }.