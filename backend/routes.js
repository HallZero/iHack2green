const express = require('express');

const router = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const analysisController = require('./src/controllers/analysisController');
const storeController = require('./src/controllers/storeController');

router.get('/', homeController.homePage);

router.get('/login', loginController.loginPage);

router.get('/analises', analysisController.analysisPage);

router.get('/comprar', storeController.storePage);

module.exports = router;

