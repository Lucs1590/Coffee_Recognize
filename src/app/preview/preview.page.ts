import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import { NavigationsService } from '../services/navigations.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit, OnDestroy {
  subscription: Subscription;
  infos: any;

  constructor(
    public utils: UtilsService,
    public navigation: NavigationsService,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    if (!this.subscription) {
      this.subscription = new Subscription();
    }
    this.utils.executed = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  close() {
    this.navigation.GalleryComponent();
  }

  sendPhotoToClassify() {
    const photo = this.utils.blobToFile(this.utils.b64toBlob(this.utils.currentImage));
    this.utils.presentLoading();
    this.apiService.sendOnePhotoToClassify(photo).then(data => {
      this.utils.processedImage = this.apiService.API_URL + '/results/' + data.imagens[0];
      this.utils.executed = true;
      this.utils.presentToast('Processing performed successfully. 🎉');
    }, err => {
      console.log(err);
      this.utils.presentToast('We had an error uploading, please try again! 🥺');
    });
  }

  sendPhotoToQuantify() {
    const photo = this.utils.blobToFile(this.utils.b64toBlob(this.utils.currentImage));
    this.utils.presentLoading();
    this.apiService.sendOnePhotoToQuantify(photo).then(data => {
      this.utils.processedImage = this.utils.currentImage;
      this.infos = data[0];
      this.utils.executed = true;
      this.utils.presentToast('Processing performed successfully. 🎉');
    }, err => {
      console.log(err);
      this.utils.presentToast('We had an error uploading, please try again! 🥺');
    });
  }
}
