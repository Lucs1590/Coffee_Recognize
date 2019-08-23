import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;
  const base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//\
  8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';


  beforeEach(() => TestBed.configureTestingModule({
    providers: [],
    imports: [],
    declarations: [],
    schemas: [],
  }));

  it('should be created', () => {
    service = TestBed.get(UtilsService);
    expect(service).toBeTruthy();
  });

  describe('Testing defined values and returns', () => {

    it('b64toBlob should return Blob()', () => {
      expect(service.b64toBlob(base64)).toEqual(new Blob());
    });

    it('blobToFile should return Blob()', () => {
      expect(service.blobToFile(new Blob())).toEqual(new Blob());
    });

    it('b64toBlob should return object type', () => {
      expect(typeof service.b64toBlob(base64)).toEqual('object');
    });

    it('blobToFile should return object type', () => {
      expect(typeof service.blobToFile(new Blob())).toEqual('object');
    });
  });
});
