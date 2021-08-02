module.exports = function() {
	const md5 = require('md5')

	app.post('/api/user/login', (req, res) => {
		con = require('../db')
		password = md5(req.body.password)
		con.query('SELECT * FROM users WHERE username=? AND password=?'
			,[req.body.username, password]
			,function(err, rows, fields) {
				if(err) {
					var obj = {
						"status": 0,
						"message": "Something wrong!"
					}
					res.send(obj)
				} else {
					if(rows.length > 0) {
						req.session.loggedin = true
						req.session.username = req.body.username
						req.session.user = rows
						req.session.user_id = rows[0].ID
						//console.log(rows[0].ID)
						var obj = {
							"status": 1,
							"message": "User authenticated!"
						}
						res.send(obj)
					} else {
						var obj = {
							"status": 0,
							"message": "Incorrect Username or Password!"
						}
						res.send(obj)
					}
				}
			}
		)
	})

	app.post('/api/user/logout', (req, res) => {
		req.session.destroy(function(err) {
		  	if(err) {
		  		res.send(err)
		  	} else {
		  		res.send('User logout successfully!')
		  	}
		})
	})

}