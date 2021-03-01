import { Router } from '@angular/router';
import { RegisterModel } from '../../../model/register.model';
import { RegisterService } from './../../../services/register.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new RegisterModel;
  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(data: NgForm) {

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

    //assigns the value to the state field
    this.userModel.status = "true";

    this.registerService.registerUser(this.userModel).subscribe(resp => {
      Swal.close();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You have successfully registered',
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
        text:  "Username already registered",
      });
      console.log(error);
    });
  }

}
