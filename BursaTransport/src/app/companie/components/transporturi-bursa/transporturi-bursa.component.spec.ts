import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporturiBursaComponent } from './transporturi-bursa.component';

describe('TransporturiBursaComponent', () => {
  let component: TransporturiBursaComponent;
  let fixture: ComponentFixture<TransporturiBursaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporturiBursaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporturiBursaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
