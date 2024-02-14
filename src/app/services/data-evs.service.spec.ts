import { TestBed } from '@angular/core/testing';

import { DataEVsService } from './data-evs.service';

describe('DataEVsService', () => {
  let service: DataEVsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEVsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
