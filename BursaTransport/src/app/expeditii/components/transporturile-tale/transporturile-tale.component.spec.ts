import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporturileTaleComponent } from './transporturile-tale.component';

describe('TransporturileTaleComponent', () => {
  let component: TransporturileTaleComponent;
  let fixture: ComponentFixture<TransporturileTaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporturileTaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporturileTaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
