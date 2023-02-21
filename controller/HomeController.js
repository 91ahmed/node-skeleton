class HomeController
{
	index (req, res)
	{
		res.render('home')
	}
}

module.exports = new HomeController