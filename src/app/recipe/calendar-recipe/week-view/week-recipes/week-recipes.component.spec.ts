import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekRecipesComponent } from './week-recipes.component';

describe('WeekRecipesComponent', () => {
  let component: WeekRecipesComponent;
  let fixture: ComponentFixture<WeekRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
