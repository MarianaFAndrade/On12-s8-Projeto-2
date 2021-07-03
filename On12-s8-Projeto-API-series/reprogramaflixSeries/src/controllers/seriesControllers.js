const series = require('../models/series.json');

const home = (req, res) => {
    res.status(200).send('Olá, seja bem-vindo a minha API de Séries ❤️')
};

const getAll = (req, res) => {
    res.status(200).send(series);
};

const getByTitle = (req, res) => {
    const titleRequire = req.query.title
    const titleFilter = series.find(serie => serie.title.toLowerCase().includes(titleRequire))

    if (titleRequire === '' || titleFilter === undefined) {
        res.status(404).send({
            'mensage': 'Por favor, insira um título válido'
        })
    } else {
        res.status(200).send(titleFilter);
    }
}

const getByGenre = (req, res) => {
    const requestedGenre = req.query.genre
    const seriesListGenre = [];

    series.forEach(genres => {
        let genreList = genres.genre

        for (genre of genreList) {
            if (genre.includes(requestedGenre)) {
                seriesListGenre.push(genres)
            }
        }
        if (requestedGenre === '' || seriesListGenre === undefined) {
            res.status(404).send({
                'mensage': 'Por favor, insira um genero válido'
            })
        } else {
            res.status(200).send(seriesListGenre);
        }
    })
    res.status(200).send(seriesListGenre)
}

const getByWriters = (req, res) => {
    const requestWriters = req.query.writers
    const seriesListWriters = [];

    series.forEach(writer => {
        let writersList = writer.writers

        for (writers of writersList) {
            if (writers.includes(requestWriters)) {
                seriesListWriters.push(writer)
            }
        }
        if (requestWriters === '' || seriesListWriters === undefined) {
            res.status(404).send({
                'mensage': 'Por favor, insira um genero válido'
            })
        } else {
            res.status(200).send(seriesListWriters);
        }
    })
}

const getByActors = (req, res) => {
    const requestActors = req.query.actors
    const seriesListActors = [];

    series.forEach(actor => {
        let actorsList = actor.actors

        for (actors of actorsList) {
            if (actors.includes(requestActors)) {
                seriesListActors.push(actors)
            }
        }
        if (requestActors === '' || seriesListActors === undefined) {
            res.status(404).send({
                'mensage': 'Por favor, insira um ator válido'
            })
        } else {
            res.status(200).send(seriesListActors);
        }
    })
}

const getById = (req, res) => {
    const idRequire = req.params.id;
    const idFilter = series.find(movie => movie.id == idRequire);
    res.status(200).send(idFilter);
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
