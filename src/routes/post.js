module.exports = function() {
	postValidation = require('../middleware/postValidation')
	auth = require('../middleware/auth')

	app.get('/api/posts/', auth, (req, res) => {
		con = require('../db');
		con.query('SELECT * FROM posts'

		,function(err, rows, fields) {
			if(err) {
				var obj = {
					"status": 0,
					"message": "Something wrong!"
				}
				res.send(obj)
			} else {
				var obj = {
					"status": 1,
					"result": rows
				}
				res.send(obj)
			}
		})
	})

	app.post('/api/post', auth, postValidation, (req, res) => {
		con = require('../db')
		con.query('INSERT INTO posts (post_content) VALUES(?)'
			,[req.body.post_content]
			,function(err, result) {
				if(err) {
					var obj = {
						"status": 0,
						"message": "Something wrong!"
					}
					res.send(obj)
				} else {
					var obj = {
						"status": 1,
						"last_id": result.insertId
					}
					res.send(obj)
				}
			}
		)
	})

	app.put('/api/post/', postValidation, (req, res) => {
		con = require('../db')
		con.query('UPDATE posts SET post_content=?, updated_at=CURRENT_TIMESTAMP() WHERE ID=?'
			,[req.body.post_content, req.body.post_id]
			,function(err, result) {
				if(err) {
					var obj = {
						"status": 0,
						"message": "Something wrong!"
					}
					res.send(obj)
				} else {
					var obj = {
						"status": 1,
						"result": result
					}
					res.send(obj)
				}
			}
		)
	})

	app.delete('/api/post', (req, res) => {
		con = require('../db')
		con.query('DELETE FROM posts WHERE ID=?'
			,[req.body.post_id]
			,function(err, result) {
				if(err) {
					var obj = {
						"status": 0,
						"message": "Something wrong!"
					}
					res.send(obj)
				} else {
					var obj = {
						"status": 1,
						"result": result
					}
					res.send(obj)
				}
			}
		)
	})

}

