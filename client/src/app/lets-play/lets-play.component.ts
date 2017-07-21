import { Component, Input,OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lets-play',
  templateUrl: './lets-play.component.html',
  styleUrls: ['./lets-play.component.css']
})
export class LetsPlayComponent implements OnInit {

  constructor(private _router:Router,
							private _http:HttpService) { }
	user=''

	q0=''
	q1=''
	q2=''

	Questions=[]
	go=false

	submitGame(e){
		if(+this.q0 < 0)this.q0 = '0'
		if(+this.q1 < 0)this.q1 = '0'
		if(+this.q2 < 0)this.q2 = '0'

		this._http.createGame({
			user:this.user,
			Score:(+this.q0 + +this.q1 + +this.q2)
		})
		.then((data)=>{this._router.navigate(['/'])})
		.catch(err=>{console.log(err)})
	}
	cancel(){
		this._router.navigate(['/'])
	}

  ngOnInit() {
		this._http.readSample()
		.then(data=>{
			this.Questions=data;this.go=true;
			console.log(this.Questions)})
		.catch(err=>{console.log(err)})

		this._http.getUser()
		.then(data=>{this.user=data.user})
		.catch(err=>{console.log(err)})
  }

}
