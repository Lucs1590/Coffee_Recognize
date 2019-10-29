import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UtilsService } from '../services/utils.service';
import { NavigationsService } from '../services/navigations.service';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss']
})
export class GalleryPage implements OnInit {
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

  openPhoto(photo) {
    this.navigation.PreviewComponent(photo);
  }

  getPhoto() {
    this.navigation.PhotoRecComponent();
  }

  clearPhotos() {
    this.photoService.photos = [];
  }

  sendPhotos() {
    const promiseBatch = this.photoService.photos.map(photo => {
      return this.apiService.sendLoteOfPhotos(this.utils.blobToFile(this.utils.b64toBlob(photo.data))).then(data => { console.log(data); },
        (err: any) => { console.log(err); });
    });
    Promise.all(promiseBatch).then(res => {
      this.apiService.processCommand().subscribe(() => {
        this.utils.presentToast('Processing performed successfully. We will send you an email. 🎉');
        this.clearPhotos();
      }, (err: any) => {
        this.utils.presentToast('We had an error uploading, please try again! 🥺');
      });
    });
  }
}
