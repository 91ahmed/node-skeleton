const config  = require('./app/config/app')
const path    = require('path')
const express = require('express')
const app     = express()
const port    = config.get('port')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ 
	extended: false
}))

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.use(express.static('app/public'))

// Set express view path
app.set('views', path.join(__dirname, './view'))

// Set Template engine
app.set('view engine', 'pug');

const routes = require('./app/routes/web')(app)

// Run server
app.listen(port, () => {
	console.log('server is running on port: '+port)
});