/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestServiceService } from './test-service.service';

describe('TestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestServiceService]
    });
  });

  it('should ...', inject([TestServiceService], (service: TestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
