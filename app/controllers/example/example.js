var response = require('../../helper/response');

exports.exampleEndpoint = function(req, res) {
    return res.status(200).send(response.response(
        'GET Example Endpoint',
        'Put message here!',
        200
    ));
}