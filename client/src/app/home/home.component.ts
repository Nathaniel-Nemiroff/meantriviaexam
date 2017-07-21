import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:HttpService,
							private _router:Router) { }
	msg=''
	@Input() user

  ngOnInit() {

		this._http.createTrivia({
			question:'What is a man?',
			correct:'A piles of lies',
			fakeone:'Love and joy',
			faketwo:'Cool n solid'})
		.then().catch()

		this._http.createTrivia({
			question:'What color is the sky?',
			correct:'blue',
			fakeone:'red',
			faketwo:'green'})
		.then().catch()

		this._http.createTrivia({
			question:'Where do babies come from?',
			correct:'Parents',
			fakeone:'the sky',
			faketwo:'A stork'})
		.then().catch()

		this._http.createTrivia({
			question:'What is the moon?',
			correct:'a satalite',
			fakeone:'cheese',
			faketwo:'mirror'})
		.then().catch()

		this._http.createTrivia({
			question:'Is this a successful project?',
			correct:'yes A+',
			fakeone:'No F-',
			faketwo:'it's ok, C'})
		.then().catch()

		this._http.getUser()
		.then(data=>{
			console.log(data.user)
			if(!data.user)
				this._router.navigate(['/login']);
		})
		.catch(err=>console.log(err))
  }

}
