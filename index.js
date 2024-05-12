const express = require('express');
const { v4: uuidv4 } = require('uuid'); // Importando o método v4 de uuid como uuidv4
const cors = require('cors');

const port = 3000;
const server = express();
server.use(express.json());
server.use(cors());

const users = []; // Array para armazenar os usuários

// Middleware para verificar se o ID do usuário existe
const checkUserId = (request, response, next) => {
    const { id } = request.params;

    const index = users.findIndex(user => user.id === id); // Procurando pelo ID do usuário no array de usuários
    if (index < 0) {
        return response.status(404).json({ message: "User not found" }); // Retornando um erro se o usuário não for encontrado
    }
    request.userIndex = index; // Armazenando o índice do usuário encontrado na requisição
    request.userId = id; // Armazenando o ID do usuário encontrado na requisição

    next(); // Chamando o próximo middleware
};

// Rota para obter todos os usuários
server.get('/users', (request, response) => {
    return response.json(users); // Retornando todos os usuários em formato JSON
});

// Rota para adicionar um novo usuário
server.post('/users', (request, response) => {
    const { name, age, telefone } = request.body;
    const user = { id: uuidv4(), name, age, telefone }; // Criando um novo usuário com um ID único gerado

    users.push(user); // Adicionando o novo usuário ao array de usuários

    return response.status(201).json(user); // Retornando o novo usuário com o status de criação (201)
});

// Rota para atualizar um usuário existente
server.put('/users/:id', checkUserId, (request, response) => {
    const { name, age, telefone } = request.body;
    const index = request.userIndex; // Obtendo o índice do usuário a ser atualizado
    const id = request.userId; // Obtendo o ID do usuário a ser atualizado

    const updatedUser = { id, name, age, telefone }; // Criando um objeto com as informações atualizadas do usuário

    users[index] = updatedUser; // Atualizando as informações do usuário no array de usuários

    return response.json(updatedUser); // Retornando as informações atualizadas do usuário
});

// Rota para deletar um usuário existente
server.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex; // Obtendo o índice do usuário a ser deletado

    users.splice(index, 1); // Removendo o usuário do array de usuários
    return response.status(204).json(); 
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});
