import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-quant',
  templateUrl: 'photo-quant.page.html',
  styleUrls: ['photo-quant.page.scss']
})
export class PhotoQuantify implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }

  RecognitionComponent() {
    this.router.navigate(['tabs', 'photo-rec']);
  }
}
