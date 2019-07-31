import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { NavParams } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {
  processedImage;
  processed: boolean;

  constructor(
    public utils: UtilsService,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.processed = false;
  }

  close() {
    this.utils.RecognitionComponent();
  }

  sendPhoto() {
    this.apiService.sendOnePhoto(this.utils.currentImage).subscribe(data => {
      this.utils.presentLoading();
      this.processedImage = data;
      this.processed = false;
      this.utils.presentToast('Processing performed successfully. 🎉');
    }, err => {
      console.log(err);
      this.utils.presentToast('We had an error uploading, please try again! 🥺');
    });
  }

  quantifyComponent() {
    this.close();
    this.utils.QuantifyComponent();
  }
}
