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

  async startCamera() {
    this.picture = null;
    const result = await this.cameraPreview.startCamera(this.cameraOpts);
    console.log(result);
  }

  async takePicture() {
    const result = await this.cameraPreview.takePicture(this.cameraPictureOpts);
    await this.cameraPreview.stopCamera();
    this.picture = `data:image/jpeg;base64,${result}`;
  }
}
