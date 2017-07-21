import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http:Http) { }

	getUser(){
		return this._http.get('/getuser')
		.map(data=>data.json())
		.toPromise();
	}

	setUser(user){
		return this._http.post('/setuser',user)
		.map(data=>data.json())
		.toPromise();
	}

	createTrivia(trivia){
		return this._http.post('/createTrivia', trivia)
		.map(data=>data.json())
		.toPromise();
	}

	readSample(){
		return this._http.get('/readsample')
		.map(data=>data.json())
		.toPromise();
	}

	createGame(game){
		return this._http.post('/creategame', game)
		.map(data=>data.json())
		.toPromise();
	}

	readAllGames(){
		return this._http.get('/readallgames')
		.map(data=>data.json())
		.toPromise();
	}
	readAllGamesSorted(sort){
		return this._http.get('/readallgamessorted',sort)
		.map(data=>data.json())
		.toPromise();
	}
	

}
