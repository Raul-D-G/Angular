import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranzactieTransportModalContentComponent } from './tranzactie-transport-modal-content.component';

describe('TranzactieTransportModalContentComponent', () => {
  let component: TranzactieTransportModalContentComponent;
  let fixture: ComponentFixture<TranzactieTransportModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranzactieTransportModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranzactieTransportModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
