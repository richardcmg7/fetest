import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterSvgComponent } from './twitter-svg.component';

describe('TwitterSvgComponent', () => {
  let component: TwitterSvgComponent;
  let fixture: ComponentFixture<TwitterSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
