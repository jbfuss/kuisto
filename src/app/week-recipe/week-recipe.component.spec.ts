import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekRecipeComponent } from './week-recipe.component';

describe('CalendarComponent', () => {
  let component: WeekRecipeComponent;
  let fixture: ComponentFixture<WeekRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
