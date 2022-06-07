import { TestBed } from '@angular/core/testing';

import { Usuarios.StateService } from './usuarios.state.service';

describe('Usuarios.StateService', () => {
  let service: Usuarios.StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usuarios.StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
