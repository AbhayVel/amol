import { TestBed } from '@angular/core/testing';

import { QMathService } from './qmath.service';

describe('QMathService', () => {
  let service: QMathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QMathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
