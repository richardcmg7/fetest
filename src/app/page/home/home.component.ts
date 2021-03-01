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
  imgLocation = "img/kanye.jpg";
  validate = 0;
  classMarginSpeakOut = "";
  sesionToken = 0;
  textButtonVotes = "Votes Now";
  valueVote;
  hideBottonVotes = 1;
  buttonVotesNewOrAgain = 0;
  textPersonFamous = ["Thank you for voting!", "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."];

  constructor(private router:Router, private auth:AuthService) {
    this.validateSesion();
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
    } else
    {
      this.sesionToken = 0;
    }
  }

  closeSesion() {
    this.auth.logout();
    this.validateSesion();

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
    console.log("este es el valor del boton seleccionado" + num);
  }

  votesUser() {
    //4. pulsar votes new
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
        //Si esta logueado
        //2. votar..
      } else {
        this.votesPerson();

        //Cambia el texto del boton votes new o vote again
        this.textButtonVotes = "Vote Again";

        //3. Se ocultan los botones
        this.hideBottonVotes = 0;
      }
    }
  }

  //enviar la informacion al servicio para guardar el voto
  votesPerson() {

  }

}
