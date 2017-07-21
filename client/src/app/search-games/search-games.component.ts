import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.css']
})
export class SearchGamesComponent implements OnInit {

  constructor(private _http:HttpService) { }
	@Input() user

	Games=[]
	criteria=''

	searchGames(){
		console.log('search!')
		if(this.criteria == 'score'||this.criteria=='percentage')
			console.log(this.Games.sort((a,b)=>
				{return b.Score - a.Score}))
		if(this.criteria == 'name')
			console.log(this.Games.sort((a,b)=>
				{if(a.user < b.user)return -1
				 if(a.user > b.user)return 1
				 else return 0;}))
	}

	getpercent(num){console.log(num)}

  ngOnInit() {
		this._http.readAllGames()
		.then(data=>{this.Games=data})
		.catch(err=>{console.log(err)})
  }

}
