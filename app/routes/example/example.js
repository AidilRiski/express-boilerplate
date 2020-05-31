var express = require('express');
var router = express.Router();
var exampleMiddleware = require('../../middleware/exampleMiddleware');
var exampleController = require('../../controllers/example/example');

router.get('/', exampleMiddleware.exampleMiddleware, exampleController.exampleEndpoint);

module.exports = router;
