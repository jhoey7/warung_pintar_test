'use strict'
const model = require('../models/appModel'),
	response = require('../../config/response.js'),
	validator = require('validatorjs');

exports.createMessage = (req, res, next) => {
	let mandatoryField = {
		'message': 'required|string'
	}

	if (req.headers['content-type'] != "application/json") {
		response.unsupportedMedia(res);
	} else {
		let validation = new validator(req.body, mandatoryField);

		if (validation.passes() == false) {
			response.mandatoryField('Terdapat filed mandatory yang kosong / bukan string. Silahkan check kembali data Anda.', res);
		} else {
			try {
				model.createMessage(req.body, (data) => {
					if (data.error == false) {
						response.ok(data.result, res);
					} else {
						if (data.error_type === 'message_exist') {
							response.conflict('Pesan ' + req.body.message + ' sudah ada.', res);
						}
					}
				}, (error) => {
					next(error)
				})
			} catch (error) {
				next(error)
			}
		}
	}
}

exports.getAllMessage = (req, res, next) => {
	if (req.headers['content-type'] != "application/json") {
		response.unsupportedMedia(res);
	} else {
		try {
			model.getAllMessage(req.io, (data) => {
				if (data.error == false) {
					response.ok(data.result, res)
				} else {
					response.badRequest(res)
				}
			}, (error) => {
				next(error)
			})
		} catch (error) {
			next(error)
		}
	}
}