import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeziTransporturileTaleComponent } from './vezi-transporturile-tale.component';

describe('VeziTransporturileTaleComponent', () => {
  let component: VeziTransporturileTaleComponent;
  let fixture: ComponentFixture<VeziTransporturileTaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeziTransporturileTaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeziTransporturileTaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
