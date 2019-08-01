import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [],
    imports: [
      RouterTestingModule
    ],
    declarations: [],
    schemas: [],
  }));

  it('should be created', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    expect(service).toBeTruthy();
  });
});
