import { TestBed } from '@angular/core/testing';

import { WindmillToValidateService } from './windmill-to-validate.service';

describe('WindmillToValidateService', () => {
  let service: WindmillToValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindmillToValidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
