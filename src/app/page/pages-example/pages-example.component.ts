import {  Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pages-example',
  templateUrl: './pages-example.component.html',
  styleUrls: ['./pages-example.component.css']
})
export class PagesExampleComponent implements OnInit {

  @Input() textPage = "";

  constructor(private router: Router,private rutaActiva: ActivatedRoute) {
    //Recibe el parametro enviado por la ruta
    this.textPage = this.rutaActiva.snapshot.params.parametro;

    //Devuelve a la pagina home
    setTimeout(()=>{
      this.router.navigateByUrl('/home');
    }, 3000);

  }

  ngOnInit(): void {

  }



}
