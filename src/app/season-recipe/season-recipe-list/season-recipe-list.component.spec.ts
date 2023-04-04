import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonRecipeListComponent } from './season-recipe-list.component';

describe('SeasonRecipeListComponent', () => {
  let component: SeasonRecipeListComponent;
  let fixture: ComponentFixture<SeasonRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonRecipeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
