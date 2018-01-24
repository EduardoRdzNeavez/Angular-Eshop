import { TestBed, inject } from '@angular/core/testing';

import { PokemomServiceService } from './pokemom-service.service';

describe('PokemomServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemomServiceService]
    });
  });

  it('should be created', inject([PokemomServiceService], (service: PokemomServiceService) => {
    expect(service).toBeTruthy();
  }));
});
