var mongoose = require('mongoose');

var Trivia = mongoose.model('Trivia');
var Game = mongoose.model('Game');
var User = mongoose.model('User');

module.exports = {

	createUser:(req,res)=>{
		var user = new User(req.body)
		user.save((err,data)=>{
			if(err)res.json(false);
			else res.json(true);})
	},
	createGame:(req,res)=>{
		//edit this to account for score rather than answered questions
		var game = new Game(req.body)
		game.save((err,data)=>{
			if(err)res.json(false);
			else res.json(true);})
	},
	createTrivia:(req,res)=>{
		var trivia = new Trivia(req.body)
		trivia.save((err,data)=>{
			if(err)res.json(false);
			else res.json(true);})
	},
	readallGames:(req,res)=>{
		Game.find({}, (err, data)=>{
			if(err)res.json(err)
			else res.json(data)
		})
	},
	readallGamesSorted:(req,res)=>{
		console.log('--------------------------------')
		Game.find({}, (err, data)=>{
			if(err)res.json(err)
			else res.json(data.sort({user:-1}))
		})
	},


	readallTrivia:(req,res)=>{
		//take in a sort item as well?
		Trivia.find({}, (err, data)=>{
			if(err)res.json(err)
			else res.json(data)
		})
	},
	readSample:(req,res)=>{
		//take in a sort item as well?
		Trivia.aggregate([{$sample:{size:3}}], (err, data)=>{
			if(err)res.json(err)
			else res.json(data)
		})
	}

	//readallsorted?:(req,res)=>{
}
