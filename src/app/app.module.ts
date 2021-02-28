import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// routes
import { APP_ROUTING } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './page/login-register/login-register.component';
import { HomeComponent } from './page/home/home.component';
import { LikeSvgComponent } from './components/like-svg/like-svg.component';
import { DislikeSvgComponent } from './components/dislike-svg/dislike-svg.component';
import { FacebookSvgComponent } from './components/facebook-svg/facebook-svg.component';
import { TwitterSvgComponent } from './components/twitter-svg/twitter-svg.component';
import { SearchSvgComponent } from './components/search-svg/search-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HomeComponent,
    LikeSvgComponent,
    DislikeSvgComponent,
    FacebookSvgComponent,
    TwitterSvgComponent,
    SearchSvgComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
