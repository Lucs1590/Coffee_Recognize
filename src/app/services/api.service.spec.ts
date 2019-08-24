import { TestBed, async } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';


describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      IonicStorageModule.forRoot()
    ],
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    service = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  describe('Testing defined values, types and returns', () => {

    it('API_URL should contain protocol https', () => {
      const url = 'https://';
      expect(service.API_URL).toMatch(url);
    });

    it('getHeader should return object type', () => {
      expect(typeof service.getHeader()).toEqual('object');
    });

    it('processCommand() should return object type', async () => {
      expect(typeof service.processCommand()).toEqual('object');
    });

  });
});
