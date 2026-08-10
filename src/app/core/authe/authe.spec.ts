import { TestBed } from '@angular/core/testing';

import { Authe } from './authe';

describe('Authe', () => {
  let service: Authe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
