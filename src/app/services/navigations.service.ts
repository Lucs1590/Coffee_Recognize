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

  GalleryComponent() {
    this.utils.clearPreviewEnv();
    this.router.navigate(['tabs', 'gallery']);
  }

  QuantifyComponent() {
    this.router.navigate(['/photo-quant']);
  }

  PreviewComponent(img) {
    this.utils.currentImage = img;
    this.router.navigate(['/preview']);
  }

  PhotoRecComponent() {
    this.router.navigate(['/photo-rec']);
  }

}
