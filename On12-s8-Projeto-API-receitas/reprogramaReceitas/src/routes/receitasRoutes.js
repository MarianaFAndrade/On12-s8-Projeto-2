const controller = require ('../controllers/receitasControllers');

const express = require('express');
const router = express.Router();

router.get('/', controller.home);
router.get('/todos', controller.getAll);
router.get('/titulo', controller.getByTitle);
router.get('./porcao', controller.getByPorcao);

module.exports = router