import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http:HttpService,
							private _router:Router) { }
	user=''

	createUser(){
		this._http.setUser({user:this.user})
		.then(data=>{this._router.navigate(['/'])})
		.catch(err=>{console.log(err)})
	}

  ngOnInit() {
  }

}
