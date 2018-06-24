import { TestBed, inject } from '@angular/core/testing';

import { VueloService } from './vuelo.service';

describe('VueloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VueloService]
    });
  });

  it('should be created', inject([VueloService], (service: VueloService) => {
    expect(service).toBeTruthy();
  }));
});
