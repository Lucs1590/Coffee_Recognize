import { Component, OnInit } from '@angular/core';
import { CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreview } from '@ionic-native/camera-preview';

@Component({
  selector: 'app-photo-rec',
  templateUrl: './photo-rec.page.html',
  styleUrls: ['./photo-rec.page.scss'],
})
export class PhotoRecPage implements OnInit {

  constructor(private cameraPreview: CameraPreview) { }

  picture: string;
  cameraOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    camera: 'rear',
    width: window.innerWidth,
    height: window.innerHeight,
    toBack: true
  };

  cameraPictureOpts: CameraPreviewPictureOptions = {
    width: 720,
    height: 1280,
    quality: 100
  };

  ngOnInit() {
    this.startCamera();
  }

  startCamera() {
    this.picture = null;
    this.cameraPreview.startCamera(this.cameraOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }

  takePicture() {
    this.cameraPreview.takePicture(this.cameraPictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    });
  }
}
