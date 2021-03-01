import { PagesExampleComponent } from './page/pages-example/pages-example.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './page/home/home.component';
import { LoginRegisterComponent } from './page/login-register/login-register.component';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-register', component: LoginRegisterComponent },
  { path: 'pagesUrl/:parametro', component: PagesExampleComponent },



  //{ path: 'home', component: HomeComponent,canActivate:[AuthGuard] },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
