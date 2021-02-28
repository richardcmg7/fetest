import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-facebook-svg',
  templateUrl: './facebook-svg.component.html',
  styleUrls: ['./facebook-svg.component.css']
})
export class FacebookSvgComponent implements OnInit {

  @Input() sizeImgSvg;
  constructor() { }

  ngOnInit(): void {
  }

}
