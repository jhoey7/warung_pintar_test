'user strict'
var message = [];
var Model = {};

Model.createMessage = (req, callback, next) => {
    try {
        const findMessage = message.find(y => y === req.message);

        if (findMessage === undefined) {
            message.push(req.message);

            callback({
                "error": false,
                "result": {
                    "message": "Pesan Berhasil Ditambahkan",
                    "data": req.message
                }
            });
        } else {
            callback({
                "error": true,
                "error_type": "message_exist"
            });
        }
    } catch (error) {
        next(error);
    }
}

Model.getAllMessage = (req, callback, next) => {
    if (message.length > 0) {
        callback({
            "error": false,
            "result": {
                "data": message,
                "message": "Terdapat " + message.length + " message ditemukan."
            }
        })
    } else {
        callback({
            "error": true
        })
    }
}
module.exports = Model