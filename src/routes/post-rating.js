module.exports = function() {
	ratingValidation = require('../middleware/ratingValidation')
	auth = require('../middleware/auth')

	app.get('/api/post-rating/:post_id', auth, (req, res) => {
		con = require('../db')

		con.query('SELECT * FROM post_rating WHERE post_id = ?'
			,[req.params.post_id]
			,function(err, rows, fields) {
				if(err) {
					var obj = {
						"status": 0,
						"message": "Something wrong!"
					}
					res.send(obj)
				} else {

					var total_rating = 0;
					rows.forEach(function(row) {
						total_rating += row.rating
					})
					var average_rating = total_rating / rows.length

					var obj = {
						"status": 1,
						"result": rows,
						"avegrage_rating": average_rating
					}
					res.send(obj)
				}
			}
		)
	})

	app.post('/api/post-rating', auth, ratingValidation, (req, res) => {
		con = require('../db')
		con.query('INSERT INTO post_rating (post_id, user_id, rating) VALUES(?, ?, ?)'
			,[req.body.post_id, req.session.user_id, req.body.rating]
			,function(err, result) {
				
				if(err) {
					console.log(err)
					var obj = {
						"status": 0,
						"message": "Something wrong!"
					}
					res.send(obj)
				} else {
					var obj = {
						"status": 0,
						"last_rating_id": result.insertId
					}
					res.send(obj)
				}
			}
		)
	})

}