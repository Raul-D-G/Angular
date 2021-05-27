import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporturiComponent } from './transporturi.component';

describe('TransporturiComponent', () => {
  let component: TransporturiComponent;
  let fixture: ComponentFixture<TransporturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransporturiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
