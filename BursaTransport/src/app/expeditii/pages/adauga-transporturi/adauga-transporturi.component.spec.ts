import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaTransporturiComponent } from './adauga-transporturi.component';

describe('AdaugaTransporturiComponent', () => {
  let component: AdaugaTransporturiComponent;
  let fixture: ComponentFixture<AdaugaTransporturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaugaTransporturiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaTransporturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
