import { Router } from '@angular/router';
import { LoginModel } from './../../../model/login.model';
import { LoginService } from './../../../services/login.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = new LoginModel;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  login(data: NgForm) {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Please wait',
    });
    Swal.showLoading();
    if (data.invalid) {
      Swal.close();
      Swal.fire({
        title: "Error",
        icon: 'error',
        text: 'The data must be complete',
      });
      return;
    }

    this.loginService.loginUser(this.userModel).subscribe(resp => {
      Swal.close();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Session started successfully',
        showConfirmButton: false,
        timer: 1500
      });
      console.log(resp);

      //Redirect to pages home
      this.router.navigateByUrl('/home');

    }, error => {
      Swal.close();
      Swal.fire({
        title: "Error",
        icon: 'error',
        text:  "Check credentials.",
      });
      console.log(error);
    });
  }
}
