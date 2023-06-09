import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFiltersComponent } from './recipe-filters.component';

describe('RecipeListFiltersComponent', () => {
  let component: RecipeFiltersComponent;
  let fixture: ComponentFixture<RecipeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
