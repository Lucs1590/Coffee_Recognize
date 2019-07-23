import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-photo-quant',
  templateUrl: 'photo-quant.page.html',
  styleUrls: ['photo-quant.page.scss']
})
export class PhotoQuantify implements OnInit {
  processedImage;
  processed: boolean;

  constructor(
    public utils: UtilsService,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    // input
    this.send_calcPhoto();
  }

  close() {
    this.utils.RecognitionComponent();
  }

  send_calcPhoto() {
    this.apiService.send_calcOnePhoto(this.utils.currentImage).subscribe(data => {
      // loading
      this.processedImage = data;
      this.processed = false;
      this.utils.presentToast('Processing performed successfully. 🎉');
    }, err => {
      console.log(err);
      this.utils.presentToast('We had an error uploading, please try again! 🥺');
    });
  }
}
