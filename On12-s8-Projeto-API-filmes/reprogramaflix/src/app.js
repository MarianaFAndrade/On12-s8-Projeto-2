const express = require('express');
const app = express();

const movies = require('./routes/moviesRoutes');

app.use('/filmes', movies) //define a rota raiz, padrão

module.exports = app //importo o app que é a const que eu chamei lá em cima, eu exporto pra poder chamar fora

