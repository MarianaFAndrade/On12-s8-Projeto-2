const receitas = require('../models/receitas.json');

const home = (req, res) => {
    res.status(200).send('Olá, bem-vinde ao meu servidor de Receitas ❤️')
};

const getAll = (req, res) => {
    res.status(200).send(receitas);

    receitas.sort(function (a, b) {

        return (a.tempo_preparo > b.tempo_preparo) ? 1 : ((b.tempo_preparo > a.tempo_preparo) ? -1 : 0);

    });

};

const getByTitle = (req, res) => {
    const titleReceitas = req.query.titulo
    const titleFilter = receitas.find(receita => receita.titulo.includes(titleReceitas))

    if (titleReceitas === '' || titleFilter === undefined) {
        res.status(404).send({
            'mensage': 'Por favor, insira um título válido'
        })
    } else {
        res.status(200).send(titleFilter);
    }
};

const getByPorcao = (req, res) => {
    const porcaoRequire = req.params.id;
    const porcaoFilter = series.find(porcao => porcao.porcoes == porcaoRequire);
    res.status(200).send(porcaoFilter);
};           

module.exports = {
    home,
    getAll,
    getByTitle,
    getByPorcao
}