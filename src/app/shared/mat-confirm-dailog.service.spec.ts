import { TestBed } from '@angular/core/testing';

import { MatConfirmDailogService } from './mat-confirm-dailog.service';

describe('MatConfirmDailogService', () => {
  let service: MatConfirmDailogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatConfirmDailogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
