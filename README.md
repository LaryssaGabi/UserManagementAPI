# User Management API

Este é um repositório contendo o código-fonte de uma API de gerenciamento de usuários simples, desenvolvida utilizando Node.js e Express.js. Esta API permite a criação, leitura, atualização e exclusão de usuários.

## Funcionalidades
- Listagem de Usuários: Consulta todos os usuários cadastrados.
- Criação de Usuários: Adiciona um novo usuário ao sistema.
- Atualização de Usuários: Atualiza as informações de um usuário existente.
- Exclusão de Usuários: Remove um usuário do sistema.



## User Management API
Este é um repositório contendo o código-fonte de uma API de gerenciamento de usuários simples, desenvolvida utilizando Node.js e Express.js. Esta API permite a criação, leitura, atualização e exclusão de usuários.

## Funcionalidades
- Listagem de Usuários: Consulta todos os usuários cadastrados.
- Criação de Usuários: Adiciona um novo usuário ao sistema.
- Atualização de Usuários: Atualiza as informações de um usuário existente.
- Exclusão de Usuários: Remove um usuário do sistema.

## Instruções de Uso
- Certifique-se de ter o Node.js instalado em seu sistema.
- Clone este repositório para o seu ambiente local.
- Navegue até o diretório raiz do projeto.
- Instale as dependências utilizando o comando npm install.
- Inicie o servidor com o comando node server.js ou npm start.
- A API estará acessível em http://localhost:3000.
- Utilizado também junto do projeto o Insomnia com as seguintes (Rotas)...

## Rotas
GET /users: Retorna uma lista de todos os usuários cadastrados.
POST /users: Adiciona um novo usuário. Requer um corpo JSON contendo as informações do usuário (nome, idade e telefone).
PUT /users/:id: Atualiza as informações de um usuário existente com base no ID fornecido. Requer um corpo JSON contendo as novas informações do usuário.
DELETE /users/:id: Remove um usuário com base no ID fornecido.

### Exemplo de Uso
- Listar todos os usuários:

*GET /users*

- Criar um novo usuário:

*POST /users
Corpo da Requisição:
{
  "name": "Nome do Usuário",
  "age": 25,
  "telefone": "123456789"
}*

- Atualizar as informações de um usuário:

*PUT /users/:id
Corpo da Requisição:
{
  "name": "Novo Nome do Usuário",
  "age": 30,
  "telefone": "987654321"
}*

- Excluir um usuário:

* DELETE /users/:id *
