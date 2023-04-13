import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduledRecipeComponent } from './add-scheduled-recipe.component';

describe('ScheduleRecipeComponent', () => {
  let component: AddScheduledRecipeComponent;
  let fixture: ComponentFixture<AddScheduledRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScheduledRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScheduledRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
