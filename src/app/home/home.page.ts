import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UtilsService } from '../services/utils.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Home implements OnInit {

  constructor(
    private socialSharing: SocialSharing,
    public utils: UtilsService,
    public storage: Storage
  ) { }

  text_share = 'I found a very cool app and I remembered you. Access the link and have a look.';
  download_url = 'http://bit.ly/Coffe-Recognize';
  img_url = 'https://raw.githubusercontent.com/Lucs1590/Coffee_Recognize/master/src/assets/imagens/leaf-recognition-share.jpg';

  ngOnInit() {
    this.storage.get('access').then(data => {
      if (data !== 1) {
        this.presentAlertPrompt();
      }
    });
  }

  shareWhatsApp() {
    this.socialSharing.shareViaWhatsApp(this.text_share, this.img_url, this.download_url).then(() => {
    }).catch(error => {
      this.socialSharing.shareViaWhatsApp(this.text_share, null, this.download_url).then(() => {
      });
    }).finally(() => {
    });
  }

  shareInstagram() {
    this.socialSharing.shareViaInstagram(this.text_share + '\n' + this.download_url, null).then(() => {
    }).catch(error => {
    });
  }

  shareEmail() {
    this.socialSharing.shareViaEmail(this.text_share + '\n' + this.download_url, 'Coffee Recognition', ['lucasbsilva29@gmail.com'],
      null, null, null).then(() => {
      }).catch(error => {
      });
  }

  async presentAlertPrompt() {
    const alert = await this.utils.alertController.create({
      header: 'Type your e-mail!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'email@email.com'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // navigator['app'].exitApp();
            this.utils.presentToast('We will not be able to send you the photos! 🥺');
          }
        }, {
          text: 'OK',
          handler: (data) => {
            this.storage.set('email', data.email);
            this.storage.set('access', 1);
          }
        }
      ]
    });

    await alert.present();
  }
}
