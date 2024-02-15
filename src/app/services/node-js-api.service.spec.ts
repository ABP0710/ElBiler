import { TestBed } from '@angular/core/testing';

import { NodeJsApiService } from './node-js-api.service';

describe('NodeJsApiService', () => {
  let service: NodeJsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeJsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
