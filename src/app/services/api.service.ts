import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public API_URL = 'http://localhost:3000';
  public API_URL = 'https://vultus.serveo.net';
  email: string;

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
    const fd = new FormData();
    this.storage.get('email').then(email_value => {
      fd.append('file', this.b64toBlob(photo));
      fd.append('email', email_value);

      const data: Observable<any> = this.http.post(`${this.API_URL}/picture/upload`, fd);
      return data;
    });
  }

  public sendLoteOfPhotos(photos: Photo[]) {
    this.storage.get('email').then(value => { this.email = value; });
    const body = { file: photos, email: this.email };
    console.log(body);
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/upload`, body);
    return data;
  }

  public send_calcOnePhoto(photo: any, mensure: number) {
    const body = { 'photo': photo, 'mensure': mensure };
    return this.http.post(`${this.API_URL}/picture/process`, body);
  }

  b64toBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }
}

class Photo {
  data: any;
}
