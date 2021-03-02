import { VotesService } from './../../services/votes.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //This data is obtained from the database
  percentageVotes = 55;

  imgsLocation = ["imgPapa.jpg", "kanye.jpg", "mark.jpg", "critina.jpg", "malala.jpg"];
  validate = 0;
  classMarginSpeakOut = "";
  sesionToken = 0;
  textButtonVotes = "Votes Now";
  valueVote = null;
  hideBottonVotes = 1;
  buttonVotesNewOrAgain = 0;
  containCard = 0;
  textPersonFamous = "Thank you for voting!";
  dataFamousApi;
  limitVotes = 0;
  dataVotesFamous = [];
  numberInte1: Number;
  numberInte2: Number;

  constructor(private router: Router, private auth: AuthService, private votesService: VotesService) {
    this.dataVotesFamous = [];
    this.votesUserLogged();
    this.validateSesion();
    this.listFamousCard();
    this.totalVotesFamoses();

  }

  ngOnInit(): void { }

  //validates if the user selected the drop-down menu of the mobile module to apply the corresponding margin
  margin() {
    if (this.validate == 0) {
      this.validate = 1;
      this.classMarginSpeakOut = "marginSpeakOutMedia";

    } else {
      this.validate = 0;
      this.classMarginSpeakOut = "";
    }
  }

  validateSesion() {
    if (sessionStorage.getItem('token')) {
      this.sesionToken = 1;
    } else {
      this.sesionToken = 0;
    }
  }

  closeSesion() {
    this.auth.logout();
    this.validateSesion();
    this.limitVotes = 0;

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'The session has been closed successfully',
      showConfirmButton: false,
      timer: 1500
    });
  }

  //1. Selecciono el boton positivo o negativo..
  checkBotton(num) {
    this.valueVote = num;
    //console.log("este es el valor del boton seleccionado" + num);
  }

  votesUser(id_votes) {

    //Valida si el usuario alcanzo el limite de votos
    if (this.limitVotes < 3) {
      this.votesUserLogged();
      //Valida si el usuario está tratando de votar sin haber seleccionado el tipo de voto
      if (this.valueVote == null && this.hideBottonVotes == 1) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Select the type of vote',
          showConfirmButton: false,
          timer: 1500
        });

      } else {
        if (this.hideBottonVotes == 0) {
          this.hideBottonVotes = 1;
          this.textButtonVotes = "Votes Now";
        } else {
          //Valida si el usuario está logueado
          this.validateSesion();
          if (this.sesionToken == 0) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'To vote you need to login',
              showConfirmButton: false,
              timer: 1500
            });

          } else {
            //Si el usuario ha iniciado sesión y va a votar
            this.votesPerson(id_votes);
          }
        }
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'You have reached the vote limit',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  //enviar la informacion al servicio para guardar el voto
  votesPerson(id_votes) {
    //Valida el tipo de voto que tuvo el usuario positivo o negativo
    if (this.valueVote == 1) {
      this.valueVote = "true";
    } else {
      this.valueVote = "false";
    }
    this.votesService.sendVotesUser(id_votes, this.valueVote).subscribe(resp => {

      //Cambia el texto del boton votes new o vote again
      this.textButtonVotes = "Vote Again";

      //Se ocultan los botones
      this.hideBottonVotes = 0;
      //Restablece el valor del voto a null
      this.valueVote = null;

      //Actualiza la barra de porcentaje
      this.totalVotesFamoses();
    }, error => {
      Swal.close();
      Swal.fire({
        title: "Error",
        icon: 'error',
        text: "There was an error registering the vote.",
      });
      console.log(error);
    });
  }

  //Trae la info de todos los famosos
  listFamousCard() {
    this.votesService.getPersonFamous().subscribe(resp => {
      this.containCard = 0;
      this.dataFamousApi = resp['character'];

      let skipRegistration = false;
      let data=[];

      this.dataFamousApi.forEach(element => {
        if (skipRegistration) {
          data.push(
            {
              "description": element.description,
              "image": element.image,
              "_id": element._id,
              "name": element.name,
            }
          );
        }
        skipRegistration = true;
      });

      this.dataFamousApi = data;
      console.log(this.dataFamousApi);
    });
  }

  informationUsers() {
    this.auth.informationUsers().subscribe(resp => {
      console.log(resp);
    })
  }

  votesUserLogged() {
    this.votesService.votesUserLogged().subscribe(resp => {
      console.log(resp);
      this.limitVotes=0;
      resp["user_votes"].forEach(element => {
        this.limitVotes++;
      });
    });
  }

  totalVotesFamoses() {
    this.votesService.totalVotesOfFamous().subscribe(resp => {
      console.log("Esta es la respuesta de todos los votos de los famosos");
      console.log(resp);

      let kanyeContador = [0, 0];
      let MarkContador = [0, 0];
      let CristineContador = [0, 0];
      let MalalaContador=[0 , 0];

      this.dataVotesFamous = [];

      resp['Votes'].forEach(element => {
        //Kanye
        if (this.dataFamousApi[0]._id == element.character[0]) {
          if (element.vote) {
            kanyeContador[0] = kanyeContador[0]+1;

          } else {
            kanyeContador[1] = kanyeContador[1]+1;

          }
        }

        //Mark
        if (this.dataFamousApi[0]._id == element.character[0]) {
          if (element.vote) {
            MarkContador[0] = MarkContador[0] +1;
          } else {
            MarkContador[1] = MarkContador[1] +1;
          }
        }
        //Cristine
        if (this.dataFamousApi[0]._id == element.character[0]) {
          if (element.vote) {
            CristineContador[0] = CristineContador[0] +1;
          } else {
            CristineContador[1] = CristineContador[1]+1;

          }
        }
        //Malala
        if (this.dataFamousApi[0]._id == element.character[0]) {
          if (element.vote) {
            MalalaContador[0] = MalalaContador[0] +1;
          } else {
            MalalaContador[1] = MalalaContador[1]+1;
          }
        }
      });


      this.numberInte1 = kanyeContador[0] / (kanyeContador[0] + kanyeContador[1]) * 100;
      this.numberInte2 = kanyeContador[1] / (kanyeContador[0] + kanyeContador[1]) * 100;

      this.dataVotesFamous.push({
        "likePercentage": this.numberInte1.toFixed(0),
        "disLikePercentage": this.numberInte2.toFixed(0)
      });

      this.numberInte1 = MarkContador[0] / (MarkContador[0] + MarkContador[1]) * 100;
      this.numberInte2 = MarkContador[1] / (MarkContador[0] + MarkContador[1]) * 100;

       this.dataVotesFamous.push({
        "likePercentage": this.numberInte1.toFixed(0),
        "disLikePercentage": this.numberInte2.toFixed(0)
       });

      this.numberInte1 = CristineContador[0] / (CristineContador[0] + CristineContador[1]) * 100,
      this.numberInte2 = CristineContador[1] / (CristineContador[0] + CristineContador[1]) * 100

       this.dataVotesFamous.push({
        "likePercentage": this.numberInte1.toFixed(0),
        "disLikePercentage": this.numberInte2.toFixed(0)
       });

      this.numberInte1 = MalalaContador[0] / (MalalaContador[0] + MalalaContador[1]) * 100,
      this.numberInte2 = MalalaContador[1] / (MalalaContador[0] + MalalaContador[1]) * 100

       this.dataVotesFamous.push({
        "likePercentage": this.numberInte1.toFixed(0),
        "disLikePercentage": this.numberInte2.toFixed(0)
      });
      console.log(this.dataVotesFamous);

    })
  }
}
