import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticatedUser() {
    return sessionStorage.getItem('token').length > 2;
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  static getToken() {
    return sessionStorage.getItem('Token');
  }
}
