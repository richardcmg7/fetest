import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-svg',
  templateUrl: './search-svg.component.html',
  styleUrls: ['./search-svg.component.css']
})
export class SearchSvgComponent implements OnInit {

  @Input() sizeImgSvg;

  constructor() { }

  ngOnInit(): void {
  }

}
