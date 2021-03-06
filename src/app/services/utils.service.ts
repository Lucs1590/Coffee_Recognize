import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  currentImage: any;
  processedImage: string;
  executed: boolean;
  percent_image: string;

  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  b64toBlob(dataURI: { split: (arg0: string) => string[]; }) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }

  blobToFile = (theBlob: Blob): File => {
    const b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = String(Date.now());
    return <File>theBlob;
  }

  clearPreviewEnv() {
    this.currentImage = null;
    this.processedImage = null;
    this.percent_image = null;
    this.executed = false;
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      // tslint:disable-next-line: max-line-length
      message: `Leaf + Rust: ${String(message).split(',')[1].replace('[', '').replace(']', '')}% || Severity of contamination: ${String(message).split(',')[0].replace('[', '').replace(']', '')}%`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
