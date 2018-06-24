import { TestBed, inject } from '@angular/core/testing';

import { EstadiaService } from './estadia.service';

describe('EstadiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadiaService]
    });
  });

  it('should be created', inject([EstadiaService], (service: EstadiaService) => {
    expect(service).toBeTruthy();
  }));
});
