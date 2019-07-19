import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Home implements OnInit {

  constructor(private socialSharing: SocialSharing, private file: File) { }

  text_share = 'I found a very cool app and I remembered you. Access the link and have a look.';
  download_url = 'https://drive.google.com/uc?id=1uBjO1onY4MfLxlFBSscKovEiNtrE-dP4&export=download';
  img_url = 'https://raw.githubusercontent.com/Lucs1590/Coffee_Recognize/shareNetwork/src/assets/imagens/leaf-recognition-share.jpg';

  ngOnInit() {

  }

  shareWhatsApp() {
    this.socialSharing.shareViaWhatsApp(this.text_share, this.img_url, this.download_url).then(() => {

    }).catch(error => {

    });
  }

  shareInstagram() {
    this.socialSharing.shareViaInstagram(this.text_share + this.download_url, null).then(() => {

    }).catch(error => {

    });
  }

  shareEmail() {
    this.socialSharing.shareViaEmail(this.text_share + this.download_url, 'Coffee Recognition', ['lucasbsilva29@gmail.com'],
      null, null, this.img_url).then(() => {
      }).catch(error => {
      });
  }

}
