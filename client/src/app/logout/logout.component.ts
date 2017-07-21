import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _http:HttpService,
							private _router:Router) { }

  ngOnInit() {
		this._http.setUser({user:undefined})
		.then(()=>this._router.navigate(['/']))
		.catch(err=>console.log(err))
  }

}
