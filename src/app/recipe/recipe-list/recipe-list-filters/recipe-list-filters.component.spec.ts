import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListFiltersComponent } from './recipe-list-filters.component';

describe('RecipeListFiltersComponent', () => {
  let component: RecipeListFiltersComponent;
  let fixture: ComponentFixture<RecipeListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
