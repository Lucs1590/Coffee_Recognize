import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UtilsService } from '../services/utils.service';
import { NavigationsService } from '../services/navigations.service';

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
    public utils: UtilsService,
    public navigation: NavigationsService
  ) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  open(photo) {
    this.navigation.PreviewComponent(photo);
  }

  clearPhotos() {
    this.photoService.photos = [];
  }

  sendPhotos() {
    this.photoService.photos.forEach(photo => {
      this.apiService.sendLoteOfPhotos(this.utils.blobToFile(this.utils.b64toBlob(photo))).then(data => { console.log(data); },
        (err: any) => { console.log(err); });
    });
    this.apiService.processCommand().subscribe(() => {
      this.utils.presentToast('Processing performed successfully. We will send you an email. 🎉');
      this.clearPhotos();
    }, (err: any) => {
      this.utils.presentToast('We had an error uploading, please try again! 🥺');
    });
  }
}
