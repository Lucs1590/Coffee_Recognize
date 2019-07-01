import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getHeader() {
    const usuario = JSON.parse(localStorage.getItem('currentUser'));
    return {
      headers: {
        'Authorization': 'Bearer ' + (usuario ? usuario.token : '')
      }
    };
  }

  public getFoto() {
    return this.http.get(`${this.API_URL}/`, this.getHeader());
  }

  public uploadFoto(photo: Photo) {
    return this.http.post(`${this.API_URL}/`, photo, this.getHeader());
  }
}

class Photo {
  data: any;
}
