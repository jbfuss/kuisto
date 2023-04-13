import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRecipeComponent } from './calendar-recipe.component';

describe('CalendarComponent', () => {
  let component: CalendarRecipeComponent;
  let fixture: ComponentFixture<CalendarRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
