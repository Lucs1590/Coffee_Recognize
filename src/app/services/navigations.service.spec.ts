import { TestBed } from '@angular/core/testing';

import { NavigationsService } from './navigations.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [],
    imports: [
      RouterTestingModule
    ],
    declarations: [],
    schemas: [],
  }));

  it('should be created', () => {
    const service: NavigationsService = TestBed.get(NavigationsService);
    expect(service).toBeTruthy();
  });
});
