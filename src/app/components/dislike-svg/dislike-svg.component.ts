import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dislike-svg',
  templateUrl: './dislike-svg.component.html',
  styleUrls: ['./dislike-svg.component.css']
})
export class DislikeSvgComponent implements OnInit {

  @Input() sizeImgSvg;

  constructor() { }

  ngOnInit(): void {
  }

}
