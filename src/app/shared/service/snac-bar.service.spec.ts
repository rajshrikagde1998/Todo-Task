import { TestBed } from '@angular/core/testing';

import { SnacBarService } from './snac-bar.service';

describe('SnacBarService', () => {
  let service: SnacBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnacBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
