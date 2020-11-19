import { TestBed } from '@angular/core/testing';

import { InfographicService } from './infographic.service';

describe('InfographicService', () => {
  let service: InfographicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfographicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
