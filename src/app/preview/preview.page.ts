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
  processedImage;
  processed: boolean;
  subscription: Subscription;

  constructor(
    public utils: UtilsService,
    public navigation: NavigationsService,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    if (!this.subscription) {
      this.subscription = new Subscription();
    }
    this.processed = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  close() {
    this.navigation.RecognitionComponent();
  }

  sendPhoto() {
    this.apiService.sendOnePhoto(this.utils.currentImage).subscribe(data => {
      this.utils.presentLoading();
      console.log(`Preview Data: ${data}`);
      this.processedImage = data;
      this.processed = false;
      this.utils.presentToast('Processing performed successfully. 🎉');
    }, err => {
      console.log(err);
      this.utils.presentToast('We had an error uploading, please try again! 🥺');
    });
  }
}
