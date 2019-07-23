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
        'Authorization': 'Bearer ' + (usuario || '')
      }
    };
  }

  public sendOnePhoto(photo: any) {
    return this.http.post(`${this.API_URL}/picture/process`, photo, this.getHeader());
  }

  public sendLoteOfPhotos(photos: Photo[]) {
    return this.http.post(`${this.API_URL}/picture/process`, photos, this.getHeader());
  }

  public send_calcOnePhoto(photo: any, mensure: number) {
    const body = { 'photo': photo, 'mensure': mensure };
    return this.http.post(`${this.API_URL}/picture/process`, body, this.getHeader());
  }
}

class Photo {
  data: any;
}
