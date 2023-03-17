import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCssComponent } from './practice-css.component';

describe('PracticeCssComponent', () => {
  let component: PracticeCssComponent;
  let fixture: ComponentFixture<PracticeCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
