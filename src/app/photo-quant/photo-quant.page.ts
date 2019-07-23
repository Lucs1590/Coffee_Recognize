import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-photo-quant',
  templateUrl: 'photo-quant.page.html',
  styleUrls: ['photo-quant.page.scss']
})
export class PhotoQuantify implements OnInit {

  constructor(
    public utils: UtilsService
  ) { }

  ngOnInit() {

  }

  close() {
    this.utils.RecognitionComponent();
  }
}
