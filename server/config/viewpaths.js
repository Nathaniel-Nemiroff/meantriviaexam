const path = require('path')
var gen = require('../controllers/Gen.js');
module.exports = function(app){
	/*app.get('/', function(req, res){
		res.render('index')
		//gen.read(req, res);
	})*/
	app.get('/getuser',(req,res)=>{
		res.json(req.session)
	})
	app.post('/setuser',(req,res)=>{
		req.session.user=req.body.user
		res.json(true)
	})

	app.post('/createuser', (req,res)=>{
		gen.createUser(req,res);})
	app.post('/creategame', (req,res)=>{
		gen.createGame(req,res);})
	app.post('/createtrivia', (req,res)=>{
		gen.createTrivia(req,res);})

	app.get('/readallgames', (req,res)=>{gen.readallGames(req,res);})
	app.get('/readallgamessorted', (req,res)=>{gen.readallGamesSorted(req,res);})


	app.get('/readalltrivia', (req,res)=>{gen.readallTrivia(req,res);})
	app.get('/readsample', (req,res)=>{gen.readSample(req,res);})

	app.get('*', (req, res) => {
		res.sendFile(path.resolve('../client/dist/index.html'))
	})
}
