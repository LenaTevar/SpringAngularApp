import { TestBed } from '@angular/core/testing';

import { HarcodedAuthService } from './harcoded-auth.service';

describe('HarcodedAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarcodedAuthService = TestBed.get(HarcodedAuthService);
    expect(service).toBeTruthy();
  });
});
