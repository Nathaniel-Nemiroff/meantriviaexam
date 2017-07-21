import { Component, Input,OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  constructor(private _router:Router,
							private _http:HttpService) { }
	@Input() user

  ngOnInit() {
  }
	question=''
	correct=''
	fakeone=''
	faketwo=''

	newQuestion(){
		console.log('submit')
		this._http.createTrivia(
			{question:this.question,
			 correct:this.correct,
			 fakeone:this.fakeone,
			 faketwo:this.faketwo
			})
		.then(data=>{console.log('success');this._router.navigate(['/'])})
		.catch(err=>{console.log(err)})
	}
	cancel(){
		this._router.navigate(['/'])
	}

}
