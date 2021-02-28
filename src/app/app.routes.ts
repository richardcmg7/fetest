import { HomeComponent } from './page/home/home.component';
import { LoginRegisterComponent } from './page/login-register/login-register.component';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-register', component: LoginRegisterComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'login-register' },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
