const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
require('dotenv').config()
app = express()

const port = process.env.PORT || 6000

app.get('/', (req, res) => {
	res.send('Please see the github repository for endpoints usage <a href="https://github.com/aman-codedocx/post-star-rating">Post Start Rating</a>')
}) 

app.use(session({
	secret: 'aman',
	resave: true,
	saveUninitialized: true
}))

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

require('./routes/post.js')(app)
require('./routes/post-rating.js')(app)
require('./routes/users.js')(app)

app.listen(port, ()=> {
	console.log('Server start on '+port+' port')
})