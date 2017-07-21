var mongoose = require('mongoose');

var triviaSchema = new mongoose.Schema({
	question:String,
	correct:String,
	fakeone:String,
	faketwo:String
},{timestamps:true})

var gameSchema = new mongoose.Schema({
	Name:String,
	Score:Number,
},{timestamps:true})

var userSchema = new mongoose.Schema({
	name:String
},{timestamps:true})

var Trivia = mongoose.model('Trivia', triviaSchema);
var Game = mongoose.model('Game', gameSchema);
var User = mongoose.model('User', userSchema);
