const port = 3000
const express = require('express');
const uuid = require('uuid');
const server = express();
server.use(express.json());


const users = []

const checkUserId = (request, response, next) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id) // aqui ele vai procurar no meu array de usuario onde o id for igual (findIndex = procura para nos)
    if (index < 0) {
        return response.status(404).json({ menssage: "User not foud" })
    }
    request.userIndex = index;
    request.userId = id

    next()
}


server.get('/users', (request, response) => {  // uma rota simples que irá mostar todos os nosos usuarios 
    return response.json(users)
})


server.post('/users', (request, response) => {  // uma rota simples que irá criar os usuarios 
    const { name, age, telefone } = request.body
    const user = { id: uuid.v4(), name, age, telefone } // o id irá gerar um id unico para cada um

    users.push(user)// pegamos o nosso array . push para mostarr os nossos array

    return response.status(201).json(user) // quando o nosso back cria uma informaçõe e ela tem sucesso, o status é 201, sendo assim podeos modificar  response.json(user) =>  response.status(201).json(user)
})


server.put('/users/:id', checkUserId, (request, response) => {  // uma rota simples que irá atualizar as informações - senod asim utilizamos o route params

    const { name, age, telefone } = request.body
    const index = request.userIndex
    const id = request.userId

    const updatedUser = { id, name, age, telefone }

    users[index] = updatedUser; // irá atualizar as informções

    return response.json(updatedUser) // sendo assim só irá aparcer o cadstro atualizado
})


server.delete('/users/:id', checkUserId, (request, response) => {  // uma rota simples que irá deletar o que gostariamos 
    const index = request.userIndex

    users.splice(index, 1) // vai deleter do indice que eu quiser até a quantidade de indices qeu eu quero 
    return response.status(204).json()
})


server.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});



