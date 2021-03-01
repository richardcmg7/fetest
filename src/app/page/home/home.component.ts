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
  percentageVotes = 10;
  imgLocation = "img/kanye.jpg";
  validate = 0;
  classMarginSpeakOut = "";
  sesionToken = 0;

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

  votesUser() {
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
      alert("puede votar");
    }
  }

}
