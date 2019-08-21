import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import { NavigationsService } from '../services/navigations.service';

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
    public navigation: NavigationsService,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    if (!this.subscription) {
      this.subscription = new Subscription();
    }
    this.presentAlertPrompt();
    this.send_calcPhoto(5);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.navigation.PreviewComponent(this.utils.currentImage);
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

  async presentAlertPrompt() {
    const alert = await this.utils.alertController.create({
      header: 'Enter leaf width!',
      inputs: [{ name: 'measure', type: 'text', placeholder: '5cm' }],
      buttons: [{
        text: 'Cancel', role: 'cancel', cssClass: 'secondary',
        handler: () => { this.navigation.PreviewComponent(this.utils.currentImage); }
      },
      { text: 'OK', handler: (data) => { this.send_calcPhoto(data.mensure); } }]
    });
    await alert.present();
  }
}
