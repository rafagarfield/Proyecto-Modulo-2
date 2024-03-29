const {Router} = require('express');
const { gethome } = require('../controllers/homeController');

const homeRouter= Router();

homeRouter.get("/", gethome)

module.exports = homeRouter;