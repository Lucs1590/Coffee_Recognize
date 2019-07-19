import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-rec',
  templateUrl: 'photo-rec.page.html',
  styleUrls: ['photo-rec.page.scss']
})
export class PhotoRecognize implements OnInit {
  currentImage: any;

  constructor(public photoService: PhotoService, public router: Router) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  QuantifyComponent() {
    this.router.navigate(['/photo-quant']);
  }
}
