import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationsService {

  constructor(
    public utils: UtilsService,
    private router: Router
    ) { }

  RecognitionComponent() {
    this.utils.clearPreviewEnv();
    this.router.navigate(['tabs', 'photo-rec']);
  }

  QuantifyComponent() {
    this.router.navigate(['/photo-quant']);
  }

  PreviewComponent(img) {
    this.utils.currentImage = img;
    this.router.navigate(['/preview']);
  }
}
