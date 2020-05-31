var jwt = require('jsonwebtoken');
var response = require('../helper/response');

exports.exampleMiddleware = function (req, res, next) {
    console.log("A request is coming!");
    next();
};