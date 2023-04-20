import { TestBed } from '@angular/core/testing';

import { GoogleImageService } from './google-image.service';

describe('GoogleImageService', () => {
  let service: GoogleImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
