import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekLabelComponent } from './week-label.component';

describe('DayComponent', () => {
  let component: WeekLabelComponent;
  let fixture: ComponentFixture<WeekLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
