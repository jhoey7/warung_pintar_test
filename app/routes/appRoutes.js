const appCtrl = require('../controllers/appController');
const express = require('express');
const response = require('../../config/response');


module.exports = function (app) {
	const apiRoutes = express.Router();

	apiRoutes.get('/', (req, res) => {
		res.send('Welcome to Node-API!')
	});

	apiRoutes.post('/api/message/create', appCtrl.createMessage);
	apiRoutes.get('/api/message/get-all-message', appCtrl.getAllMessage);

	app.use('/', apiRoutes);
	app.use(function (req, res, next) {
		response.urlNotFound(res);
	});

	app.use(function (err, req, res, next) {
		response.fatalError(res);
	});
}