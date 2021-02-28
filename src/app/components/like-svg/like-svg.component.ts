import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-svg',
  templateUrl: './like-svg.component.html',
  styleUrls: ['./like-svg.component.css']
})
export class LikeSvgComponent implements OnInit {

  @Input() sizeImgSvg;

  constructor() { }
  ngOnInit(): void {
  }

}
