import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailContentComponent } from './recipe-detail-content.component';

describe('RecipeDetailContentComponent', () => {
  let component: RecipeDetailContentComponent;
  let fixture: ComponentFixture<RecipeDetailContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
