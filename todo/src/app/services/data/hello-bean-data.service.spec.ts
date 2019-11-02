import { TestBed } from '@angular/core/testing';

import { HelloBeanDataService } from './hello-bean-data.service';

describe('HelloBeanDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloBeanDataService = TestBed.get(HelloBeanDataService);
    expect(service).toBeTruthy();
  });
});
