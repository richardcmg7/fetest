import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tocken: string;
  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  authenticatedUser() {
    return sessionStorage.getItem('token').length > 2;
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id_user_logged');

  }

  static getToken() {
    return sessionStorage.getItem('token');
  }

  informationUsers() {
    return this.http.get(
      `${this.url}users`
    ).pipe(
      map(resp => {
        return resp;
      }),
    );
  }
}
