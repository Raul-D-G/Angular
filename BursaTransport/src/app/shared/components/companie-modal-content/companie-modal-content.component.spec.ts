import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanieModalContentComponent } from './companie-modal-content.component';

describe('CompanieModalContentComponent', () => {
  let component: CompanieModalContentComponent;
  let fixture: ComponentFixture<CompanieModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanieModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanieModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
