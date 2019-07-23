import { Injectable } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { PreviewPage } from '../preview/preview.page';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  currentImage: any;

  constructor(
    public toastController: ToastController,
    public modalController: ModalController
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
}
