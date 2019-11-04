import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview/ngx';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  constructor(
    private storage: Storage,
    private cameraPreview: CameraPreview
  ) { }
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

  takePicture() {
    this.cameraPreview.takePicture(this.cameraPictureOpts).then((imageData) => {
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });
      this.storage.set('photos', this.photos);
    }, (err) => {
      // Handle error
      console.log('Camera issue: ' + err);
    });
  }

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

  startCamera() {
    this.cameraPreview.startCamera(this.cameraOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }

  stopCamera() {
    this.cameraPreview.stopCamera();
  }
}

class Photo {
  data: any;
}
