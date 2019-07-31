import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-photo-rec',
  templateUrl: 'photo-rec.page.html',
  styleUrls: ['photo-rec.page.scss']
})
export class PhotoRecognize implements OnInit {
  constructor(
    public photoService: PhotoService,
    public router: Router,
    public apiService: ApiService,
    public utils: UtilsService
  ) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  open(photo) {
    this.utils.PreviewComponent(photo);
  }

  clearPhotos() {
    this.photoService.photos = [];
  }

  sendPhotos() {
    this.apiService.sendLoteOfPhotos(this.photoService.photos).subscribe(data => {
      console.log(data);
      this.clearPhotos();
      this.utils.presentToast('Processing performed successfully. We will send you an email. 🎉');
    }, err => {
      console.log(err);
      this.utils.presentToast('We had an error uploading, please try again! 🥺');
    });
  }


}
