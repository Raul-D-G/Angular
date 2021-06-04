import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaModalContentComponent } from './alerta-modal-content.component';

describe('AlertaModalContentComponent', () => {
  let component: AlertaModalContentComponent;
  let fixture: ComponentFixture<AlertaModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
