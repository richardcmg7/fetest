import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-svg',
  templateUrl: './twitter-svg.component.html',
  styleUrls: ['./twitter-svg.component.css']
})
export class TwitterSvgComponent implements OnInit {

  @Input() sizeImgSvg;

  constructor() { }

  ngOnInit(): void {
  }

}
