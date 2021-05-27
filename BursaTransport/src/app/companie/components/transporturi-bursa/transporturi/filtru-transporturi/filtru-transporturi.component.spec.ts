import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltruTransporturiComponent } from './filtru-transporturi.component';

describe('FiltruTransporturiComponent', () => {
  let component: FiltruTransporturiComponent;
  let fixture: ComponentFixture<FiltruTransporturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltruTransporturiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltruTransporturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
