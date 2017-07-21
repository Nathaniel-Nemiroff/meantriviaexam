import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { SearchGamesComponent } from './search-games/search-games.component';
import { TriviaQuestionComponent } from './trivia-question/trivia-question.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { NewQuestionComponent } from './new-question/new-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LetsPlayComponent,
    NewQuestionComponent,
    SearchGamesComponent,
    TriviaQuestionComponent,
    HomeComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
		HttpModule,
		FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
