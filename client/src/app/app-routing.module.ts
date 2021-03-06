import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { NewQuestionComponent } from './new-question/new-question.component';

const routes: Routes = [
  {
    path: '',
		pathMatch:'full',
		component:HomeComponent
  },
	{
		path:'lets_play',
		component:LetsPlayComponent
	},
	{
		path:'new_question',
		component:NewQuestionComponent
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'logout',
		component:LogoutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
