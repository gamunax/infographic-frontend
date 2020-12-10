import { TestBed } from '@angular/core/testing';

import { InfographicFacade } from './infographic.facade';

describe('InfographicService', () => {
  let service: InfographicFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfographicFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
