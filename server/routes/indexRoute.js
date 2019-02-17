const express = require('express');

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
	res.render('index', {
		title: 'Books Library Shipment Portal'
	});
});

exports = module.exports = indexRouter;