const { request, response } = require('express');
const series = require('../models/series.json');

const home = (request, response) => {
    response.status(200).send('Olá, seja bem-vindo a minha API de Séries ❤️')
};

const getAll = (request, response) => {
    response.status(200).send(series);
};

const getByTitle = (request, response) => {
    const titleRequire = request.query.title
    const titleFilter = series.find(serie => serie.title.toLowerCase().includes(titleRequire))

    if (titleRequire === '' || titleFilter === undefined) {
        response.status(404).send({
            'mensage': 'Por favor, insira um título válido'
        })
    } else {
        response.status(200).send(titleFilter);
    }
}

const getByGenre = (request, response) => {
    const requestedGenre = request.query.genre
    const seriesListGenre = [];

    series.forEach(genres => {
        let genreList = genres.genre

        for (genre of genreList) {
            if (genre.includes(requestedGenre)) {
                seriesListGenre.push(genres)
            }
        }
        if (requestedGenre === '' || seriesListGenre === undefined) {
            response.status(404).send({
                'mensage': 'Por favor, insira um genero válido'
            })
        } else {
            response.status(200).send(seriesListGenre);
        }
    })
    response.status(200).send(seriesListGenre)
}

const getByWriters = (request, response) => {
    const requestWriters = request.query.writers
    const seriesListWriters = [];

    series.forEach(writer => {
        let writersList = writer.writers

        for (writers of writersList) {
            if (writers.includes(requestWriters)) {
                seriesListWriters.push(writer)
            }
        }
        if (requestWriters === '' || seriesListWriters === undefined) {
            response.status(404).send({
                'mensage': 'Por favor, insira um genero válido'
            })
        } else {
            response.status(200).send(seriesListWriters);
        }
    })
}

const getByActors = (request, response) => {
    const requestActors = request.query.actors
    const seriesListActors = [];

    series.forEach(actor => {
        let actorsList = actor.actors

        for (actors of actorsList) {
            if (actors.includes(requestActors)) {
                seriesListActors.push(actors)
            }
        }
        if (requestActors === '' || seriesListActors === undefined) {
            response.status(404).send({
                'mensage': 'Por favor, insira um ator válido'
            })
        } else {
            response.status(200).send(seriesListActors);
        }
    })
}

const getById = (request, response) => {
    const idRequire = request.params.id;
    const idFilter = series.find(movie => movie.id == idRequire);
    response.status(200).send(idFilter);
};


module.exports = {
    home,
    getAll,
    getByTitle,
    getByActors,
    getByGenre,
    getByWriters,
    getById,
}
