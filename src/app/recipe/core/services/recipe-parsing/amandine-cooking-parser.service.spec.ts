import { TestBed } from '@angular/core/testing';

import { AmandineCookingParserService } from './amandine-cooking-parser.service';

describe('AmandineCookingParserService', () => {
  let service: AmandineCookingParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmandineCookingParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
