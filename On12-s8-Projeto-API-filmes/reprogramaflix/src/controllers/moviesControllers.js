// no controlers fica a lógica
const { request, response } = require('express');
const movies = require('../models/filmes.json') //importando o arquivo jason de filmes

const home = (request, response) => {
    response.status(200).send('Olá criatura, seja bem-vinda ao Caos e desespero!!! Ta passada? ❤️')
};

const getAll = (request, response) => {
    response.status(200).send(movies);
};

const getById = (request, response) => {
    const idRequire = request.params.id; //aqui eu pego o pass rapams pra acessar os ids
    const idFilter = movies.find(movie => movie.id == idRequire); //O find é o parametro de uma função anonima e pra ele eu vou passar o elemento + a l[ogica do que eu quero]
    response.status(200).send(idFilter);
};

const getByTitle = (request, response) => {
    const titleRequire = request.query.title.toLowerCase() // uso query porque é titulo - acessando o título solicitado na request e colocando tudo em menusculo
    const titleFilter = movies.find(movie => movie.title.toLowerCase().includes(titleRequire)) //includes é um método de JS que determina se um Array contém um determinado elemento retornando true or false

    if (titleRequire === '' || titleFilter === undefined) {
        response.status(404).send({
            'mensage': 'Por favor, insira um título válido'
        })
    }else{
        response.status(200).send(titleFilter);
    }

}

module.exports = { 
    home, 
    getAll,
    getById,
    getByTitle
}