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
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.navigation.PreviewComponent(this.utils.currentImage);
  }
}
