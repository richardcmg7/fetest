import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesExampleComponent } from './pages-example.component';

describe('PagesExampleComponent', () => {
  let component: PagesExampleComponent;
  let fixture: ComponentFixture<PagesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
