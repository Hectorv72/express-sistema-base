const routes = require('express').Router();
const { mainPage } = require('../controllers/base.controllers');

routes.get('/', mainPage);

module.exports = routes;
