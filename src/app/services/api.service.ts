import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public API_URL = 'http://localhost:3000';
  public API_URL = 'https://trepide.serveo.net';
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

  public async sendOnePhoto(photo: string | Blob | File) {
    const fd = new FormData();
    const email_value = await this.storage.get('email');
    fd.append('file', photo);
    fd.append('email', email_value);
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/upload`, fd);
    return data.toPromise();
  }

  public async sendLoteOfPhotos(photo: string | Blob | File) {
    const fd = new FormData();
    const email_value = await this.storage.get('email');
    fd.append('file', photo);
    fd.append('email', email_value);
    const data: Observable<any> = this.http.post(`${this.API_URL}/picture/upload-gallery`, fd);
    return data.toPromise();
  }

  public send_calcOnePhoto(photo: any, mensure: number) {
    const body = { 'photo': photo, 'mensure': mensure };
    return this.http.post(`${this.API_URL}/picture/process`, body);
  }

  public processCommand() {
    return this.http.get(`${this.API_URL}/picture/process-and-send-email`);
  }

  b64toBlob(dataURI: { split: (arg0: string) => string[]; }) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }

  public blobToFile = (theBlob: Blob): File => {
    const b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = String(Date.now());
    return <File>theBlob;
  }
}

class Photo {
  data: any;
}
