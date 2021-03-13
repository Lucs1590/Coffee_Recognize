import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public API_URL = 'http://localhost:3000';
  public API_URL = 'https://alvaro-fhjf.localhost.run';
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

  public async sendOnePhotoToClassify(photo: string | Blob | File) {
    const fd = new FormData();
    fd.append('file', photo);
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/upload`, fd);
    return data.toPromise();
  }

  public async sendLoteOfPhotos(photo: string | Blob | File) {
    const fd = new FormData();
    fd.append('file', photo);
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/upload-gallery`, fd);
    return data.toPromise();
  }

  public sendOnePhotoToQuantify(photo: string | Blob | File) {
    const fd = new FormData();
    fd.append('file', photo);
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/quantify`, fd);
    return data.toPromise();
  }

  public async processCommand() {
    const fd = new FormData();
    const email_value = await this.storage.get('email');
    fd.append('email', email_value);
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/process-and-send-email`, fd);
    return data.toPromise();
  }
}
