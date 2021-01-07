import { TestBed } from '@angular/core/testing';

import { TagFacade } from './tag.facade';

describe('TagService', () => {
  let service: TagFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
