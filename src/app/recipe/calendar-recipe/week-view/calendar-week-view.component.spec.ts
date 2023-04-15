import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWeekViewComponent } from './calendar-week-view.component';

describe('CalendarHeaderComponent', () => {
  let component: CalendarWeekViewComponent;
  let fixture: ComponentFixture<CalendarWeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarWeekViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
