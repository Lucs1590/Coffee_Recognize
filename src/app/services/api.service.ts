import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public API_URL = 'http://localhost:3000';
  public API_URL = 'http://87c0d53b.ngrok.io';

  constructor(private http: HttpClient, private storage: Storage) { }

  getHeader() {
    const usuario = JSON.parse(localStorage.getItem('currentUser'));
    return {
      headers: {
        'Authorization': 'Bearer ' + (usuario || '')
      }
    };
  }

  public sendOnePhoto(photo: any) {
    const body = { file: photo, email: this.storage.getItem('access') };
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/upload`, body);
    return data;
  }

  public sendLoteOfPhotos(photos: Photo[]) {
    const body = { file: photos, email: this.storage.getItem('access') };
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/upload`, body);
    return data;
  }

  public send_calcOnePhoto(photo: any, mensure: number) {
    const body = { 'photo': photo, 'mensure': mensure };
    return this.http.post(`${this.API_URL}/picture/process`, body);
  }
}

class Photo {
  data: any;
}
