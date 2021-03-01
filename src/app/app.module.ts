import { InterceptorService } from './services/interceptors/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { LoginComponent } from './components/login-register/login/login.component';
import { RegisterComponent } from './components/login-register/register/register.component';
import { PagesExampleComponent } from './page/pages-example/pages-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HomeComponent,
    LikeSvgComponent,
    DislikeSvgComponent,
    FacebookSvgComponent,
    TwitterSvgComponent,
    SearchSvgComponent,
    LoginComponent,
    RegisterComponent,
    PagesExampleComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
