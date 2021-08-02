const validatorjs = require('validatorjs')
const validator = (body, rule, message, callback) => {
	const validation = new validatorjs(body, rule, message)
	validation.passes(() => callback(null, true))
	validation.fails(() => callback(validation.errors, false))
}

const ratingValidation = (req, res, next) => {
	const validationRule = {
		"rating": "required|max:5"
	}
	validator(req.body, validationRule, {}, (err, status) => {
		if(!status) {
			var obj = {
				"success": false,
                "message": 'Validation failed',
                "data": err
			}
			res.send(obj)
		} else {
			next()
		}
	})
}

module.exports = ratingValidation