import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tocken: string;
  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  loginUser(data) {
    return this.http.post(
      `${this.url}api/auth/login`,data
    ).pipe(
      map(resp => {
        sessionStorage.setItem('id_user_logged', resp["id"]);
        this.saveToken(resp['token']);
        return resp;
      }),
    );
  }

  private saveToken(dataToken) {
    this.tocken = dataToken;
    sessionStorage.setItem('token', dataToken);
  }

  readToken() {
    if (sessionStorage.getItem('token')) {
      this.tocken = sessionStorage.getItem('token');
    } else {
      this.tocken = "";
    }
    return this.tocken;
  }
}
