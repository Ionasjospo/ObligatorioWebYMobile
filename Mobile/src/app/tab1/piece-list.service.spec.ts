import { TestBed } from '@angular/core/testing';

import { PieceListService } from './piece-list.service';

describe('PieceListService', () => {
  let service: PieceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
