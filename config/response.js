async function ok(req, reply) {
    return reply
        .status(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            response: {
                status: true,
                message: req.message,
                data: req.data
            }
        });
}

async function badRequest(reply) {
    return reply
        .status(400)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            response: {
                status: false,
                message: 'param is missing or the value is empty'
            }
        });
}

async function mandatoryField(message, reply) {
    return reply
        .status(422)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            response: {
                status: false,
                message: message
            }
        });
}

async function conflict(message, reply) {
    return reply
        .status(409)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            response: {
                status: false,
                message: message
            }
        });
}

async function fatalError(reply) {
    return reply
        .status(500)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            response: {
                status: false,
                message: "Internal Server Error. Please Contact Your Administrator."
            }
        });
}

async function urlNotFound(reply) {
    return reply
        .status(401)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            response: {
                status: false,
                message: "Request URL Not found."
            }
        });
}

async function validate(message, reply) {
    return reply
        .status(422)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            response: {
                status: false,
                message: message
            }
        });
}

async function unsupportedMedia(reply) {
    return reply
        .status(415)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            response: {
                status: false,
                message: "Please use 'Content-Type: application/json' as your http headers"
            }
        })
}

module.exports = { ok, badRequest, mandatoryField, conflict, fatalError, urlNotFound, validate, unsupportedMedia };