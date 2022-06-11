import { TestBed } from '@angular/core/testing';

import { ObaExamplesService } from './oba-examples.service';

describe('ObaExamplesService', () => {
  let service: ObaExamplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObaExamplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
