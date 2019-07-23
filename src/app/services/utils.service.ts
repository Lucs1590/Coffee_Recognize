import { Injectable } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

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

  async presentModal(_component) {
    const modal = await this.modalController.create({
      component: _component
    });
    return await modal.present();
  }
}
