import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  @Input() currentImage;

  constructor(public utils: UtilsService) { }

  ngOnInit() {
  }

  close() {
    this.utils.dismissModal();
  }
}
