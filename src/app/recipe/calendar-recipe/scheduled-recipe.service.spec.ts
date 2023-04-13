import { TestBed } from '@angular/core/testing';

import { ScheduledRecipeService } from './scheduled-recipe.service';

describe('ScheduleRecipeService', () => {
  let service: ScheduledRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
