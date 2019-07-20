import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    service = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  describe('Testing Defined Values', () => {

    it('API_URL should be equal in front', () => {
      const url = 'http://localhost:3000';
      expect(url).toEqual(service.API_URL);
    });

    it('getHeader should return object type', () => {
      expect(typeof service.getHeader()).toEqual('object');
    });

  });
});
