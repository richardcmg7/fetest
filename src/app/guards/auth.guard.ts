import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}

  canActivate(): boolean {
    if (this.auth.authenticatedUser()) {
      return true;
    }
    else{
      this.router.navigateByUrl('/login-register');
      return false;
    }
  }

}
