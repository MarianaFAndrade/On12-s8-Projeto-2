const controller = require ('../controllers/moviesControllers');

const express = require('express');
const router = express.Router();

router.get('/', controller.home);
router.get('/todos', controller.getAll);
router.get('/titulo', controller.getByTitle) //aqui eu posso acessar por tudo usando o parametro base, "filmes"
router.get('/:id', controller.getById) //como ele é pef params(parametros que vem dentro da URL ele tem por base usar os :) Aqui eu defino um end point, é uma url(descobri o Brasil)

// router.get('/genero')


module.exports = router
