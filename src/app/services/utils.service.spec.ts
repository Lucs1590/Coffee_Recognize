import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [],
    imports: [],
    declarations: [],
    schemas: [],
  }));

  it('should be created', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    expect(service).toBeTruthy();
  });
});
