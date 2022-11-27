import { TestBed } from '@angular/core/testing';

import { WindmillVisualizeService } from './windmill-visualize.service';

describe('WindmillVisualizeService', () => {
  let service: WindmillVisualizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindmillVisualizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
