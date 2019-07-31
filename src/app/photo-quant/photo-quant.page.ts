import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-quant',
  templateUrl: 'photo-quant.page.html',
  styleUrls: ['photo-quant.page.scss']
})
export class PhotoQuantify implements OnInit, OnDestroy {
  processedImage;
  processed: boolean;
  subscription: Subscription;

  constructor(
    public utils: UtilsService,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    if (!this.subscription) {
      this.subscription = new Subscription();
    }
    this.utils.presentAlertPrompt();
    this.send_calcPhoto(5);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.utils.RecognitionComponent();
  }

  send_calcPhoto(mensure) {
    this.apiService.send_calcOnePhoto(this.utils.currentImage, mensure).subscribe(data => {
      this.utils.presentLoading();
      this.processedImage = data;
      this.processed = false;
      this.utils.presentToast('Processing performed successfully. 🎉');
    }, err => {
      console.log(err);
      this.utils.presentToast('We had an error uploading, please try again! 🥺');
    });
  }
}
