import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VotesService {


  private url = environment.baseUrl;

  tocken: string;

  constructor(private http: HttpClient) { }

  //Devuelve la info de todos los personajes
  getPersonFamous() {
    return this.http.get(
      `${this.url}character`
    ).pipe(
      map(resp => {
        return resp;
      }),
    );
  }

  //Envia los votos del usuario
  sendVotesUser(id_vote,selectVote) {
    const dataVote = [{
      "character": id_vote,
      "user": sessionStorage.getItem('id_user_logged'),
      "vote": selectVote,
    }];
    console.log(dataVote);

    return this.http.post(
      `${this.url}votes`, dataVote[0]
    ).pipe(
      map(resp => {
        return resp;
      }),
    );
  }

  votesUserLogged() {
    const data = [{
      "id": sessionStorage.getItem('id_user_logged'),
    }];
      return this.http.post(
      `${this.url}votes/user`, data[0]
    ).pipe(
      map(resp => {
        return resp;
      }),
    );
  }

  totalVotesOfFamous() {
    return this.http.get(
      `${this.url}votes`,
    ).pipe(
      map(resp => {
        return resp;
      }),
    );
  }



}
