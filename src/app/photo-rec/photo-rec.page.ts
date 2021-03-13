import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-rec',
  templateUrl: './photo-rec.page.html',
  styleUrls: ['./photo-rec.page.scss'],
})
export class PhotoRecPage implements OnInit, OnDestroy {

  constructor(
    public photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoService.startCamera();
  }

  ngOnDestroy() {
    this.photoService.stopCamera();
  }

}
