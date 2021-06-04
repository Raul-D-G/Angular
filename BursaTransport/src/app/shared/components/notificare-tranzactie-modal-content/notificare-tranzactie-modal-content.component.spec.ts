import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificareTranzactieModalContentComponent } from './notificare-tranzactie-modal-content.component';

describe('NotificareTranzactieModalContentComponent', () => {
  let component: NotificareTranzactieModalContentComponent;
  let fixture: ComponentFixture<NotificareTranzactieModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificareTranzactieModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificareTranzactieModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
