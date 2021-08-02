const session = require('express-session')

const auth = (req, res, next) => {
	if(!req.session.loggedin) {
		var obj = {
			"status": 0,
			"message": "Authentication failed!"
		}
		res.send(obj)
	} else {
		next()
	}
}

module.exports = auth