// import controllers
const HomeController = require('../../controller/HomeController')

module.exports = (app) => 
{
	app.get('/', (req, res) => {
		res.render('welcome')
	})

	app.get('/home', HomeController.index)
}