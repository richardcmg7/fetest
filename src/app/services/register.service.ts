import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = environment.baseUrl;

  tocken: string;

  constructor(private http: HttpClient) { }

  registerUser(data) {
    return this.http.post(
      `${this.url}api/auth/signup`, data
    ).pipe(
      map(resp => {
        sessionStorage.setItem('id_user_logged', resp["id"]);
        this.saveToken(resp['token']);
        return resp;
      })
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
