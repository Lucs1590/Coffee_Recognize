import { Injectable } from '@angular/core';
import { ToastController, ModalController, LoadingController, AlertController } from '@ionic/angular';
import { PreviewPage } from '../preview/preview.page';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  currentImage: any;

  constructor(
    public toastController: ToastController,
    public modalController: ModalController,
    public router: Router,
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

  async presentModal(currentImage) {
    const modal = await this.modalController.create({
      component: PreviewPage,
      componentProps: {
        'currentImage': currentImage
      }
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  RecognitionComponent() {
    this.router.navigate(['tabs', 'photo-rec']);
  }

  QuantifyComponent() {
    this.router.navigate(['/photo-quant']);
  }

  PreviewComponent(img) {
    this.currentImage = img;
    this.router.navigate(['/preview']);
  }
}
