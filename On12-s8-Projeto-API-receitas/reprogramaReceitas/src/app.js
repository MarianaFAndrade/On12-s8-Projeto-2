const express = require('express');
const app = express();

const receitas = require('./routes/receitasRoutes');

app.use('/receitas', receitas)

module.exports = app