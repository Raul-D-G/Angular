import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaTransportComponent } from './adauga-transport.component';

describe('AdaugaTransportComponent', () => {
  let component: AdaugaTransportComponent;
  let fixture: ComponentFixture<AdaugaTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaugaTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
