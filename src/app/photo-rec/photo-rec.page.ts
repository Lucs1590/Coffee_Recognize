import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-photo-rec',
  templateUrl: 'photo-rec.page.html',
  styleUrls: ['photo-rec.page.scss']
})
export class PhotoRecognize implements OnInit {
  currentImage: any;

  constructor(
    public photoService: PhotoService,
    public router: Router,
    public apiService: ApiService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  quantifyComponent() {
    this.router.navigate(['/photo-quant']);
  }

  clearPhotos() {
    this.photoService.photos = [];
  }

  sendPhotos() {
    this.apiService.uploadLoteOfPhotos(this.photoService.photos).subscribe(data => {
      console.log(data);
      this.clearPhotos();
      this.presentToast('Processing performed successfully. We will send you an email. 🎉');
    }, err => {
      console.log(err);
      this.presentToast('We had an error uploading, please try again! 🥺');
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
